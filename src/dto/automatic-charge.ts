import { z } from "zod";

export interface AutomaticCharge {
    customerId: string;
    collectionMethod: "charge_automatically" | "send_invoice";
    paymentMethodId?: string;
}

export const automaticChargeSchema = z.object({
    customerId: z.string(),
    collectionMethod: z.enum(["charge_automatically", "send_invoice"]),
    paymentMethodId: z.string().optional(),
}).strict();

export type AutomaticChargeType = z.infer<typeof automaticChargeSchema>;