import z from "zod";

export interface ConfirmForgotPassword {
    username: string;
    newPassword: string;
    confirmationCode: string;
}

export const confirmForgotPasswordSchema = z.object({
    username: z.string(),
    newPassword: z.string(),
    confirmationCode: z.string(),
});

export type ConfirmForgotPasswordType = z.infer<typeof confirmForgotPasswordSchema>;