import { z } from "zod";

export interface ActionLog {
    residentialId?: string; // ID of the residential unit where the action took place
    module: string; // Description of the action performed
    httpMethod: string; // HTTP method used for the action (e.g., GET, POST)
    userId: string; // ID of the user who performed the action
    isoTimestamp: string; // Timestamp of when the action was performed
    details?: string; // Optional field for additional details about the action
}

export const actionLogSchema = z.object({
    residentialId: z.string().optional(),
    module: z.string(),
    httpMethod: z.string(),
    userId: z.string(),
    isoTimestamp: z.string().datetime({ offset: false }),
    details: z.string().optional(),
});

export type ActionLogType = z.infer<typeof actionLogSchema>;