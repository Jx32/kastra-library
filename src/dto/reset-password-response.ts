export interface ResetPasswordResponse {
    result: "OK" | "EMAIL_ERROR",
    temporaryPassword: string
}