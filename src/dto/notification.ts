import { z } from "zod";

export interface Notification {
    _id?: string,
    userId?: string, // Optional field to associate the notification with a user
    residentialId?: string, // Optional field to associate the notification with a residential
    isGlobal?: boolean, // Optional field to indicate if the notification is global
    title: string,
    content: string,
    url: string,
    isoCreatedAt: string,
}

export const notificationSchema = z.object({
    _id: z.string().optional(),
    userId: z.string().optional(), // Optional field to associate the notification with a user
    residentialId: z.string().optional(), // Optional field to associate the notification with a residential
    isGlobal: z.boolean().optional(), // Optional field to indicate if the notification is global
    title: z.string(),
    content: z.string().max(250, "Content must be at most 500 characters long"),
    url: z.string(),
    isoCreatedAt: z.string().datetime({ offset: false }),
}).strict();

export type NotificationType = z.infer<typeof notificationSchema>;