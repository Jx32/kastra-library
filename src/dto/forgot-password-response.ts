export interface ForgotPasswordResponse {
    destination: string;
    deliveryMethod: "EMAIL" | "SMS";
}