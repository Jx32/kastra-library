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
    quantity: number;
}

export const invitationSchema = z.object({
    _id: z.string().optional(),
    userId: z.string().optional(),
    userType: basicUserTypeEnumSchema.optional(),
    type: invitationTypeEnumSchema,
    duration: invitationDurationEnumSchema,
    isoDueDate: z.string(),
    quantity: z.number().int().min(1).max(20),
});

export type InvitationType = z.infer<typeof invitationSchema>;

export const invitationSchemaToInterface = (data: InvitationType): Invitation => {
    return {
        _id: data._id,
        userId: data.userId,
        userType: data.userType,
        type: data.type,
        duration: data.duration,
        isoDueDate: data.isoDueDate,
        quantity: data.quantity,
    };
}