import { z } from "zod";

export interface InvoicePaymentIntent {
    invoiceId: string;
    paymentMethodId: string;
}

export const invoicePaymentIntentSchema = z.object({
    invoiceId: z.string(),
    paymentMethodId: z.string().min(1, "Payment method ID is required"),
}).strict();

export type InvoicePaymentIntentType = z.infer<typeof invoicePaymentIntentSchema>;