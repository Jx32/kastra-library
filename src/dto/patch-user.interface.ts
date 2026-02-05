import { z } from "zod";
import { PHONE_REGEX } from "../constants/constants";

export interface PatchUser {
    residentialId?: string; // Optional field for residential ID
    name?: string;
    email?: string;
    phone_number?: string;
    firstLogin?: boolean;
    houseNumber?: string;
    street?: string;
    currentPinAccess?: string;
    iaBehaviour?: "formal" | "friendly" | "funny",
    avatarUrl?: string; // Optional field for avatar URL
    role?: "houseOwner" | "houseRelated" | "helpDesk" | "admin" | "tenant"; // Optional field for user role
    allowNotifications?: boolean;
}

export const patchUserSchema = z.object({
    residentialId: z.string().optional(), // Optional field for residential ID
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone_number: z.string().regex(PHONE_REGEX).optional(),
    firstLogin: z.boolean().optional(),
    houseNumber: z.string().optional(),
    street: z.string().optional(),
    currentPinAccess: z.string().length(4, "Current PIN must be 4 digits length").optional(),
    iaBehaviour: z.enum(["formal", "friendly", "funny"]).optional(),
    avatarUrl: z.string().optional(), // Optional field for avatar URL
    role: z.enum(["houseOwner", "houseRelated", "helpDesk", "admin", "tenant"]).optional(), // Optional field for user role
    allowNotifications: z.boolean().optional()
}).strict();

export type PatchUserType = z.infer<typeof patchUserSchema>;