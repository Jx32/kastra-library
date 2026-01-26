import { z } from "zod";
import { File, fileSchema } from "./file.interface";

export interface PaymentProof {
    invoiceId: string;
    file: File;
}

export const paymentProofSchema = z.object({
    invoiceId: z.string(),
    file: fileSchema,
});

export type PaymentProofType = z.infer<typeof paymentProofSchema>;