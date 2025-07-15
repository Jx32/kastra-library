import { Invitation } from "./invitation";
import { InvitationData } from "./invitation-data";

export interface InvitationCreationResponse {
    _id: string;
    indexedId: string;
    invitation: Invitation;
    data: InvitationData;
}