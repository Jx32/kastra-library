import { z } from "zod";

export interface Guest {
    _id?: string; // Unique identifier for the guest
    name: string; // Name of the guest
    avatarUrl: string; // URL of the guest's avatar image
    isoCreatedOn: string; // Date when the guest was created
}

export const guestSchema = z.object({
    _id: z.string().optional(), // Unique identifier for the guest, optional
    name: z.string(),
    avatarUrl: z.string().url(),
    isoCreatedOn: z.string().datetime(),
});

export type GuestSchema = z.infer<typeof guestSchema>;