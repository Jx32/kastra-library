export interface Invitation {
    _id?: string;
    userId: string; // User ID of the person who sent the invitation, this can be the guest ID or the user Sub
    type: string;
    duration: string;
    isoDueDate: string;
}