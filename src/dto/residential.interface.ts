/**
 * Residential interface represents a residential area where remote devices are installed,
 * and where users can live or have a house.
 * 
 * @interface Residential
 */

import z from "zod";
import { MONGODB_ID_REGEX } from "../constants/constants";

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
}

const residentialSchema = z.object({
    _id: z.string().regex(MONGODB_ID_REGEX, "Invalid ID format, must be a valid hex value").optional(),
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postalCode: z.string(),
    contactNumber: z.string().optional(),
    status: z.enum(["active", "inactive"]),
}).strict();

export type ResidentialType = z.infer<typeof residentialSchema>;