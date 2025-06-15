/**
 * RemoteOpeningAction interface represents an action that will be performed on a remote device,
 * such as opening or closing a gate, and includes metadata about the action.
 * Also can be used to log actions performed by users or systems.
 * 
 * @interface RemoteGateLog
 */

import z from "zod";
import { ObjectId } from "mongodb";

export interface RemoteGateLog {
    remoteGateId: string;
    source: "app" | "totem",
    action: "open" | "enable" | "disable" | "create" | "delete" | "update";
    timestamp: string; // ISO 8601 format
    userSub: string; // If the action is performed by a user
    reason?: string; // Optional, for logging purposes
    additionalInfo?: any; // Optional, for any extra information
}

export const remoteGateLogSchema = z.object({
    remoteGateId: z.string().transform(val => new ObjectId(val)).optional(),
    timestamp: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid timestamp format, must be ISO 8601",
    }),
    userSub: z.string().uuid(),
    reason: z.string().optional(),
    additionalInfo: z.any().optional(),
}).strict();

export type RemoteGateLogType = z.infer<typeof remoteGateLogSchema>;