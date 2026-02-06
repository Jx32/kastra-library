import { z } from "zod";
import { VideoCallToken, videoCallTokenSchema } from "./video-call-token.interface";

export interface TotemCall {
    _id?: string,
    residentialId: string,
    residentialName?: string, // This field should be gathered on the backend, not in the physical device
    remoteGateId: string,
    remoteGateName?: string, // This field should be gathered on the backend, not in the physical device
    isoCreatedAt: string,
    videoCallToken?: VideoCallToken // This field will be generated on the backend
}

export const totemCallSchema = z.object({
    _id: z.string().optional(),
    residentialId: z.string(),
    residentialName: z.string().optional(),
    remoteGateId: z.string(),
    remoteGateName: z.string().optional(),
    isoCreatedAt: z.string().datetime({ offset: false }),
    videoCallToken: videoCallTokenSchema.optional()
}).strict();

export type TotemCallType = z.infer<typeof totemCallSchema>;