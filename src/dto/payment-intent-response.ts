export interface PaymentIntentResponse {
    clientSecret: string; // The client secret for the payment intent, used to confirm the payment on the client side
    requiresAction: boolean; // Indicates if additional action is required to complete the payment
}