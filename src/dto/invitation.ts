import { InvitationDurationEnum } from "../enum/invitation-duration.enum";
import { InvitationTypeEnum } from "../enum/invitation-type.enum";

export interface Invitation {
    _id?: string;
    userSub: string;
    type: InvitationTypeEnum;
    duration: InvitationDurationEnum;
    isoDueDate: string;
}