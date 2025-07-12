/**
 * RemoteDevice Interface represents a gate that can be controlled remotely,
 * and are installed physically at the entrance or exit of a residential area.
 * 
 * @interface RemoteGate
 */

import { z } from "zod";

export interface RemoteGate {
    _id?: string;
    residentialId: string;
    name: string;
    type: "entrance" | "exit";
    thingName: string;
    enabled?: boolean; // Optional field to indicate if the gate is enabled
}

export const remoteGateSchema = z.object({
    _id: z.string().optional(),
    residentialId: z.string(),
    name: z.string(),
    type: z.enum(["entrance", "exit"]),
    thingName: z.string(),
    enabled: z.boolean().optional(), // Optional field to indicate if the gate is enabled
}).strict();

export type RemoteGateType = z.infer<typeof remoteGateSchema>;