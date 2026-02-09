import { z } from "zod";

export interface TotemCallStatus {
    status: "waiting" | "rejected" | "onCall" | "ended",
    message: string,
    isoCreatedAt: string
}

export interface TotemCallAction {
    action: "doorOpen",
    reason: "resident" | "publicServices" | "thrashRecollection" | "emergencyServices" | "other",
    remoteGateId: string,
    isoCreatedAt: string
}

export interface TotemCall {
    _id?: string,
    residentialId: string,
    residentialName?: string, // This field should be gathered on the backend, not in the physical device
    status: "waiting" | "rejected" | "onCall" | "ended",
    isoCreatedAt: string,
    attendedByUsername?: string,
    statusList?: TotemCallStatus[],
    actionList?: TotemCallAction[],
}

export const totemCallStatusSchema = z.object({
    status: z.enum(["waiting", "rejected", "onCall", "ended"]),
    message: z.string(),
    isoCreatedAt: z.string().datetime({ offset: false })
}).strict();

export const totemCallActionSchema = z.object({
    action: z.literal("doorOpen"),
    reason: z.enum(["resident", "publicServices", "thrashRecollection", "emergencyServices", "other"]),
    remoteGateId: z.string(),
    isoCreatedAt: z.string().datetime({ offset: false })
}).strict();

export const totemCallSchema = z.object({
    _id: z.string().optional(),
    residentialId: z.string(),
    residentialName: z.string().optional(),
    status: z.enum(["waiting", "rejected", "onCall", "ended"]),
    isoCreatedAt: z.string().datetime({ offset: false }),
    attendedByUsername: z.string().optional(),
    statusList: z.array(totemCallStatusSchema).optional(),
    actionList: z.array(totemCallActionSchema).optional()
}).strict();

export type TotemCallType = z.infer<typeof totemCallSchema>;