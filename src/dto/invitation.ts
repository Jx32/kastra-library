import { z } from "zod";
import { InvitationDurationEnum, invitationDurationEnumSchema } from "../enum/invitation-duration.enum";
import { InvitationTypeEnum, invitationTypeEnumSchema } from "../enum/invitation-type.enum";
import { BasicUserTypeEnum, basicUserTypeEnumSchema } from "./basic-user-info";

export interface Invitation {
    _id?: string;
    userId?: string; // User ID of the person who sent the invitation, this can be the guest ID or the user Sub
    userType?: BasicUserTypeEnum,
    type: InvitationTypeEnum;
    duration: InvitationDurationEnum;
    isoDueDate: string;
}

export const invitationSchema = z.object({
    _id: z.string().optional(),
    userId: z.string().optional(),
    userType: basicUserTypeEnumSchema.optional(),
    type: invitationTypeEnumSchema,
    duration: invitationDurationEnumSchema,
    isoDueDate: z.string(),
});