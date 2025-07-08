import { InvitationDurationEnum } from "./invitation-duration-enum";
import { InvitationTypeEnum } from "./invitation-type-enum";

export interface Invitation {
    _id?: string;
    userSub: string;
    type: InvitationTypeEnum;
    duration: InvitationDurationEnum,
    isoDueDate: string;
}