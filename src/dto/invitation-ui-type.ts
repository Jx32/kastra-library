import { InvitationTypeEnum } from "./invitation-type-enum";

export interface InvitationUIDescription {
    type: InvitationTypeEnum,
    title: string;
    description: string;
}