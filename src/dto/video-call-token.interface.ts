import { z } from "zod";

export interface VideoCallToken {
  token: string;
  roomName: string;
}

export const videoCallTokenSchema = z.object({
  token: z.string(),
  roomName: z.string(),
});

export type VideoCallTokenType = z.infer<typeof videoCallTokenSchema>;