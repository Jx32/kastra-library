export interface ActionLog {
    action: string; // Description of the action performed
    userId: string; // ID of the user who performed the action
    isoTimestamp: string; // Timestamp of when the action was performed
    details?: string; // Optional field for additional details about the action
}