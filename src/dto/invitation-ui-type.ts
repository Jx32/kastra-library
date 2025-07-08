import { InvitationTypeEnum } from "./invitation-type.enum";

export interface InvitationUIType {
    type: InvitationTypeEnum,
    title: string;
    description: string;
    icon: string;
}