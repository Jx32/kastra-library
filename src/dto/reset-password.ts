import z from "zod";

export interface ResetPassword {
    username: string;
}

export const resetPasswordSchema = z.object({
    username: z.string().min(1, "Username is required"),
});

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;