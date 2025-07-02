import { z } from "zod";

export interface PaymentIntent {
    username: string;
    invoiceId: string;
    paymentMethodId: string;
    returnUrl: string;
}

export const paymentIntentSchema = z.object({
    username: z.string().min(1, "Username is required"),
    invoiceId: z.string(),
    paymentMethodId: z.string().min(1, "Payment method ID is required"),
    returnUrl: z.string().url("Return URL must be a valid URL"),
}).strict();

export type PaymentIntentType = z.infer<typeof paymentIntentSchema>;