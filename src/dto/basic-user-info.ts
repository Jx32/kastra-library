import { z } from "zod";

export const enum BasicUserTypeEnum {
     REGISTERED_USER = "registeredUser",
     GUEST_USER = "guestUser",
}

export const basicUserTypeEnumSchema = z.enum(["registeredUser", "guestUser"]);

export interface BasicUserInfo {
  id: string;
  name: string;
  avatarUrl: string;
  type: BasicUserTypeEnum;
}

export const BasicUserInfoSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  avatarUrl: z.string().url(),
  type: basicUserTypeEnumSchema,
}).strict();

export type BasicUserInfoType = z.infer<typeof BasicUserInfoSchema>;