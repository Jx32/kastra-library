/**
 * RemoteDevice Interface represents a gate that can be controlled remotely,
 * and are installed physically at the entrance or exit of a residential area.
 * 
 * @interface RemoteGate
 */

import { z } from "zod";

export interface Payment {
    _id?: string;
    userSub: string;
    amount: number;
    currency: string;
    status: "pending" | "completed" | "failed";
    createdAt: string;
    updatedAt: string;
    stripePaymentId?: string; // Optional field for Stripe payment ID
}

export const PaymentSchema = z.object({
    _id: z.string().optional(),
    userSub: z.string().uuid(),
    amount: z.number(),
    currency: z.string(),
    status: z.enum(["pending", "completed", "failed"]),
    createdAt: z.date(),
    updatedAt: z.date(),
    stripePaymentId: z.string().optional() // Optional field for Stripe payment ID
});

export type PaymentType = z.infer<typeof PaymentSchema>;