import { z } from "zod";
import { PHONE_REGEX } from "../constants/constants";

export interface PatchUser {
    name?: string;
    email?: string;
    phone_number?: string;
    firstLogin?: boolean;
    houseNumber?: string;
    street?: string;
}

export const patchUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone_number: z.string().regex(PHONE_REGEX).optional(),
    firstLogin: z.boolean().optional(),
    houseNumber: z.string().optional(),
    street: z.string().optional(),
}).strict();

export type PatchUserType = z.infer<typeof patchUserSchema>;