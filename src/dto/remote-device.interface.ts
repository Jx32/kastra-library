/**
 * RemoteDevice Interface represents a gate that can be controlled remotely,
 * and are installed physically at the entrance or exit of a residential area.
 * 
 * @interface RemoteGate
 */

import { z } from "zod";
import { ObjectId } from "mongodb";

export interface RemoteGate {
    _id?: string;
    residentialId: string;
    name: string;
    type: "entrance" | "exit";
}

export const remoteGateSchema = z.object({
    _id: z.string().transform(val => new ObjectId(val)).optional(),
    residentialId: z.string().transform(val => new ObjectId(val)),
    name: z.string(),
    type: z.enum(["entrance", "exit"]),
}).strict();

export type RemoteGateType = z.infer<typeof remoteGateSchema>;