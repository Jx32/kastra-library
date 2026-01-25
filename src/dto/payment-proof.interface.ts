import { z } from "zod";
import { File, fileSchema } from "./file.interface";

export interface PaymentProof {
    _id?: string;
    invoiceId: string;
    file: File;
}

export const paymentProofSchema = z.object({
    _id: z.string().optional(),
    invoiceId: z.string(),
    file: fileSchema,
});

export type PaymentProofType = z.infer<typeof paymentProofSchema>;