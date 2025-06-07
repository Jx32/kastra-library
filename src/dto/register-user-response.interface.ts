export interface RegisterUserResponse {
    sub: string; // User's unique identifier
    temporaryPassword: string; // Temporary password for the user
}