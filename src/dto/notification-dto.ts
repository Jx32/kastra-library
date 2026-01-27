import { z } from "zod";

export interface NotificationDto {
    title: string,
    content: string,
    url: string,
    isoCreatedAt: string,
    message: string, // field for additional message
}

export const notificationDtoSchema = z.object({
    title: z.string(),
    content: z.string().max(250, "Content must be at most 250 characters long"),
    url: z.string(),
    isoCreatedAt: z.string().datetime({ offset: false }),
    message: z.string(), // field for additional message
}).strict();

export type NotificationDtoType = z.infer<typeof notificationDtoSchema>;