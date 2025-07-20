import z from "zod";

export interface ResetPassword {
    accessToken: string;
    previousPassword: string;
    newPassword: string;
}

/*
Contains at least 1 number
Contains at least 1 special character
Contains at least 1 uppercase letter
Contains at least 1 lowercase letter
Contains at least 8 characters
*/

export const resetPasswordSchema = z.object({
    accessToken: z.string(),
    previousPassword: z.string(),
    newPassword: z.string()
        .min(8, "New password must be at least 8 characters long")
        .regex(/[0-9]/, "New password must contain at least one number")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "New password must contain at least one special character")
        .regex(/[A-Z]/, "New password must contain at least one uppercase letter")
        .regex(/[a-z]/, "New password must contain at least one lowercase letter"),
});

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;