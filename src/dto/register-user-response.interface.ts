export interface RegisterUserResponse {
    sub: string; // User's unique identifier
    temporaryPassword: string; // Temporary password for the user
    username: string; // Username of the user
    name: string; // Full name of the user
}