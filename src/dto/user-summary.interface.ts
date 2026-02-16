import z from "zod";
import { RemoteGate, remoteGateSchema } from "./remote-gate.interface";

export interface UserSummary {
    remoteGates: RemoteGate[];
    currentPinAccess: string;
    topicName: string;
    accessEnabled: boolean;
}

export const userSummarySchema = z.object({
    remoteGates: z.array(remoteGateSchema),
    currentPinAccess: z.string().length(4, "Current PIN must be 4 digits length"),
    topicName: z.string().min(1, "Topic name cannot be empty"),
    accessEnabled: z.boolean(),
}).strict();

export type UserSummaryType = z.infer<typeof userSummarySchema>;