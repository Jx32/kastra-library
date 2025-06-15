/**
 * RemoteOpeningAction interface represents an action that will be performed on a remote device,
 * such as opening or closing a gate, and includes metadata about the action.
 * Also can be used to log actions performed by users or systems.
 * 
 * Those actions will be used to control devices like gates, doors, etc.,
 * and can be triggered by users or automated systems.
 * 
 * A remote opening action it's indentended to be in the residential MQTT topic.
 * 
 * @interface RemoteOpeningAction
 */

import z from "zod";
import { ObjectId } from "mongodb";

export interface RemoteOpeningAction {
    remoteGateId: string;
    action: "open" | "close";
    timestamp: string; // ISO 8601 format
    userSub: string; // Optional, if the action is performed by a user
    reason?: string; // Optional, for logging purposes
    additionalInfo?: any; // Optional, for any extra information
}

export const remoteOpeningActionSchema = z.object({
    remoteGateId: z.string().transform(val => new ObjectId(val)).optional(),
    action: z.enum(["open", "close"]),
    timestamp: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid timestamp format, must be ISO 8601",
    }),
    userSub: z.string().uuid(),
    reason: z.string().optional(),
    additionalInfo: z.any().optional(),
}).strict();

export type RemoteOpeningActionType = z.infer<typeof remoteOpeningActionSchema>;