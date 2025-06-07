import { z } from "zod";

export interface User {
    sub?: string;
    username?: string;
    name: string;
    email: string;
    email_verified: boolean;
    phone_number?: string;
    phone_number_verified?: boolean;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
    residentialId: string;
    houseOwnerSub?: string;
}

export const userSchema = z.object({
    sub: z.string().uuid().optional(),
    username: z.string().optional(),
    name: z.string(),
    email: z.string().email(),
    email_verified: z.boolean(),
    phone_number: z.string().optional(),
    phone_number_verified: z.boolean().optional(),
    firstLogin: z.boolean(),
    houseNumber: z.string(),
    role: z.enum(["houseOwner", "houseRelated", "helpDesk", "admin"]),
    street: z.string(),
    residentialId: z.string(),
    houseOwnerSub: z.string().uuid().optional(),
}).strict();

export type UserType = z.infer<typeof userSchema>;