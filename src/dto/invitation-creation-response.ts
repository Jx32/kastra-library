import { Invitation } from "./invitation";
import { InvitationData } from "./invitation-data";

export interface InvitationCreationResponse {
    invitation: Invitation;
    data: InvitationData;
}