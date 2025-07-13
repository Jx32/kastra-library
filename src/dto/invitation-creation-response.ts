import { Invitation } from "./invitation";
import { InvitationData } from "./invitation-data";

export interface InvitationCreationResponse {
    _id: string;
    invitation: Invitation;
    data: InvitationData;
}