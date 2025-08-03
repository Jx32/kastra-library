import { z } from "zod";

export interface Notification {
    _id?: string,
    title: string,
    content: string,
    url: string,
    isoCreatedAt: string,
}

export const notificationSchema = z.object({
    _id: z.string().optional(),
    title: z.string(),
    content: z.string().max(250, "Content must be at most 500 characters long"),
    url: z.string(),
    isoCreatedAt: z.string().datetime({ offset: false }),
}).strict();

export type NotificationType = z.infer<typeof notificationSchema>;