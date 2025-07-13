import { InvitationDurationEnum } from "../enum/invitation-duration.enum";
import { InvitationTypeEnum } from "../enum/invitation-type.enum";
import { BasicUserTypeEnum } from "./basic-user-info";

export interface Invitation {
    _id?: string;
    userId: string; // User ID of the person who sent the invitation, this can be the guest ID or the user Sub
    userType: BasicUserTypeEnum,
    type: InvitationTypeEnum;
    duration: InvitationDurationEnum;
    isoDueDate: string;
}