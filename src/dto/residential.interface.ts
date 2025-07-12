/**
 * Residential interface represents a residential area where remote devices are installed,
 * and where users can live or have a house.
 * 
 * @interface Residential
 */

import z from "zod";

export interface Residential {
    _id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    contactNumber?: string;
    status: "active" | "inactive";
    topicName: string;
    monthlyPaymentStripePriceId?: string;
    monthlyPaymentAmount: string;
}

export const residentialSchema = z.object({
    _id: z.string().optional(),
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postalCode: z.string(),
    contactNumber: z.string().optional(),
    status: z.enum(["active", "inactive"]),
    topicName: z.string(),
    monthlyPaymentStripePriceId: z.string().optional(),
    monthlyPaymentAmount: z.string(),
}).strict();

export type ResidentialType = z.infer<typeof residentialSchema>;