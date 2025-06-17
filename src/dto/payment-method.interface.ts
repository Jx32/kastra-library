import { z } from "zod";

export interface PaymentMethod {
    id: string; // Unique identifier for the payment method
    type: "card" | "bank_account" | "paypal"; // Type of payment method
    brand?: string; // Brand of the card (e.g., Visa, MasterCard) if applicable
    last4?: string; // Last four digits of the card or bank account number
    exp_month?: number; // Expiration month of the card if applicable
    exp_year?: number; // Expiration year of the card if applicable
}

export const paymentMethodSchema = z.object({
    id: z.string(),
    type: z.enum(["card", "bank_account", "paypal"]),
    brand: z.string().optional(), // Optional, only for card type
    last4: z.string().optional(), // Optional, only for card or bank account type
    exp_month: z.number().optional(), // Optional, only for card type
    exp_year: z.number().optional(), // Optional, only for card type
}).strict();

export type PaymentMethodType = z.infer<typeof paymentMethodSchema>;