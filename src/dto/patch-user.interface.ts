import { z } from "zod";
import { PHONE_REGEX } from "../constants/constants";

export interface PatchUser {
    name?: string;
    email?: string;
    phone_number?: string;
    firstLogin?: boolean;
    houseNumber?: string;
    street?: string;
    currentPinAccess?: string;
    iaBehaviour?: "formal" | "friendly" | "funny",
}

export const patchUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone_number: z.string().regex(PHONE_REGEX).optional(),
    firstLogin: z.boolean().optional(),
    houseNumber: z.string().optional(),
    street: z.string().optional(),
    currentPinAccess: z.string().length(4, "Current PIN must be 4 digits length").optional(),
    iaBehaviour: z.enum(["formal", "friendly", "funny"]).optional(),
}).strict();

export type PatchUserType = z.infer<typeof patchUserSchema>;