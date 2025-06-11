import z from "zod";
import { RemoteGate, remoteGateSchema } from "./remote-gate.interface";

export interface UserSummary {
    remoteGates: RemoteGate[];
    currentPinAccess: string;
    // TODO: Add payment summary object
}

export const userSummarySchema = z.object({
    remoteGates: z.array(remoteGateSchema),
    currentPinAccess: z.string().length(4, "Current PIN must be 4 digits length")
}).strict();

export type UserSummaryType = z.infer<typeof userSummarySchema>;