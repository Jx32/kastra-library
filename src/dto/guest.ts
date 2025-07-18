import { z } from "zod";

export interface Guest {
    _id?: string; // Unique identifier for the guest
    userSub: string; // User ID of the guest (usually the host)
    name: string; // Name of the guest
    avatarUrl: string; // URL of the guest's avatar image
    isoCreatedOn: string; // Date when the guest was created
}

export const guestSchema = z.object({
    _id: z.string().optional(),
    userSub: z.string().uuid(),
    name: z.string(),
    avatarUrl: z.string().url(),
    isoCreatedOn: z.string().datetime(),
});

export type GuestType = z.infer<typeof guestSchema>;