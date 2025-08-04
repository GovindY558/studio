'use server';
/**
 * @fileOverview A flow to notify you about clothing choices.
 *
 * - sendClothingChoice - A function that sends an email with the selected choices.
 * - SendClothingChoiceInput - The input type for the sendClothingChoice function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// IMPORTANT: This flow uses Nodemailer to send emails via SMTP.
// For this to work, you MUST set the following environment variables in your .env file:
// SMTP_HOST: The hostname of your SMTP server (e.g., "smtp.gmail.com").
// SMTP_PORT: The port of your SMTP server (e.g., 587).
// SMTP_USER: The username for your SMTP authentication.
// SMTP_PASS: The password for your SMTP authentication.


const SendClothingChoiceInputSchema = z.object({
  choices: z.array(z.string()).describe("The list of clothing items she selected."),
});
export type SendClothingChoiceInput = z.infer<typeof SendClothingChoiceInputSchema>;

const emailTool = ai.defineTool(
    {
        name: 'sendEmail',
        description: 'Sends an email.',
        inputSchema: z.object({
            to: z.string().describe('The email address of the recipient.'),
            from: z.string().describe('The email address of the sender.'),
            subject: z.string().describe('The subject of the email.'),
            body: z.string().describe('The HTML body of the email.'),
        }),
        outputSchema: z.void(),
    },
    async (input) => {
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
            console.error("Missing SMTP environment variables. Cannot send email.");
            // In a real app, you might want to throw an error here
            // to notify the caller that the email could not be sent.
            throw new Error("SMTP server is not configured.");
        }

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: parseInt(SMTP_PORT, 10),
            secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: `"${input.from}" <${SMTP_USER}>`, // sender address
                to: input.to, // list of receivers
                subject: input.subject, // Subject line
                html: input.body, // html body
            });
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Failed to send email:", error);
            // Re-throw the error to let the flow know something went wrong.
            throw new Error("Failed to send email.");
        }
    }
)

const sendChoiceFlow = ai.defineFlow(
  {
    name: 'sendChoiceFlow',
    inputSchema: SendClothingChoiceInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    await ai.generate({
        prompt: `She has made her choices! Please send an email to notify me.
        
        Her choices are:
        {{#each choices}}
        - {{this}}
        {{/each}}
        
        The 'to' address is 'YOUR_EMAIL@example.com'.
        The 'from' address is 'LoveStory Notifier'.
        `,
        input: input,
        tools: [emailTool],
        model: 'googleai/gemini-2.0-flash',
    });
  }
);


export async function sendClothingChoice(input: SendClothingChoiceInput): Promise<void> {
    return sendChoiceFlow(input);
}
