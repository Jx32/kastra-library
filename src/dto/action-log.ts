import { z } from "zod";

export interface ActionLog {
    residentialId?: string; // ID of the residential unit where the action took place
    action: string; // Description of the action performed
    userId: string; // ID of the user who performed the action
    isoTimestamp: string; // Timestamp of when the action was performed
    details?: string; // Optional field for additional details about the action
}

export const actionLogSchema = z.object({
    residentialId: z.string().optional(),
    action: z.string().min(1, "Action description cannot be empty"),
    userId: z.string(),
    isoTimestamp: z.string().datetime({ offset: false }),
    details: z.string().optional(),
});

export type ActionLogType = z.infer<typeof actionLogSchema>;