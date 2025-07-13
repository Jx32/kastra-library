import { InvitationTypeEnum } from "../enum/invitation-type.enum";

export interface InvitationCreationResponse {
    type: InvitationTypeEnum;
    data: string[];
}