import z from "zod";

export interface ResetPassword {
    username: string;
}

/*
Contains at least 1 number
Contains at least 1 special character
Contains at least 1 uppercase letter
Contains at least 1 lowercase letter
Contains at least 8 characters
*/

export const resetPasswordSchema = z.object({
    username: z.string().min(1, "Username is required"),
});

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;