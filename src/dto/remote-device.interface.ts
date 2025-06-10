/**
 * RemoteDevice Interface represents a device that can be controlled remotely,
 * and are installed physically at the entrance or exit of a residential area.
 * 
 * @interface RemoteDevice
 */

import { z } from "zod";
import { MONGODB_ID_REGEX } from "../constants/constants";

export interface RemoteDevice {
    _id: string;
    residentialId: string;
    name: string;
    type: "entranceGate" | "exitGate";
}

export const remoteDeviceSchema = z.object({
    _id: z.string().regex(MONGODB_ID_REGEX, "Invalid ID format, must be a valid hex value"),
    residentialId: z.string().regex(MONGODB_ID_REGEX, "Invalid residential ID format, must be a valid hex value"),
    name: z.string(),
    type: z.enum(["entranceGate", "exitGate"]),
}).strict();

export type RemoteDeviceType = z.infer<typeof remoteDeviceSchema>;