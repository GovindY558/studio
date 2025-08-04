'use server';
/**
 * @fileOverview A flow to notify you about clothing choices.
 *
 * - sendClothingChoice - A function that sends an email with the selected choices.
 * - SendClothingChoiceInput - The input type for the sendClothingChoice function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// IMPORTANT: This flow is a placeholder. To make it work, you need to:
// 1. Choose an email sending service (e.g., Resend, SendGrid, Mailgun).
// 2. Add the corresponding npm package for that service.
// 3. Implement the `sendEmail` tool below using your chosen service's API.
// 4. Set the required API keys (e.g., RESEND_API_KEY) as environment variables.
// 5. Update the `to` and `from` email addresses in the prompt.

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
        // TODO: Replace with your actual email sending logic
        console.log("****************************************************");
        console.log("Email Tool Called (Placeholder)");
        console.log(`To: ${input.to}`);
        console.log(`From: ${input.from}`);
        console.log(`Subject: ${input.subject}`);
        console.log(`Body: ${input.body}`);
        console.log("In a real app, this would send an email.");
        console.log("****************************************************");
        
        // Example with Resend (if you `npm install resend`):
        // const { Resend } = require('resend');
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: input.from,
        //   to: input.to,
        //   subject: input.subject,
        //   html: input.body,
        // });
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
        The 'from' address is 'notification@lovestory.app'.
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
