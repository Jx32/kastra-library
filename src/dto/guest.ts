import { ObjectId } from "mongodb";
import { z } from "zod";

export interface Guest {
    _id?: ObjectId; // Unique identifier for the guest
    name: string; // Name of the guest
    avatarUrl: string; // URL of the guest's avatar image
    isoCreatedOn: string; // Date when the guest was created
}

export const guestSchema = z.object({
    _id: z.string().transform(val => new ObjectId(val)).optional(),
    name: z.string(),
    avatarUrl: z.string().url(),
    isoCreatedOn: z.string().datetime(),
});

export type GuestType = z.infer<typeof guestSchema>;