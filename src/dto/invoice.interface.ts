import { z } from "zod";

export interface Invoice {
    id: string;
    status: "draft" | "open" | "paid" | "uncollectible" | "void"; // Comes from https://docs.stripe.com/api/invoices/object?api-version=2025-05-28.basil#invoice_object-status
    created: number; // Unix timestamp in that the invoice was created
    total: number; // Total amount after discounts and taxes
    ammount_remaining: number; // Amount due after discounts and taxes
    customerId: string; // Customer ID from Stripe
    description: string; // Optional description of the invoice
    invoice_pdf?: string; // URL to the invoice PDF
    collection_method: "charge_automatically" | "send_invoice"; // How the invoice will be paid
    due_date?: number; // Optional, only if collection_method is "send_invoice"
    days_until_due?: number; // Optional, only if collection_method is "send_invoice"
    monthName: string; // Name of the month for which the invoice is generated
    year: number; // Year for which the invoice is generated
}

export const invoiceSchema = z.object({
    id: z.string(),
    status: z.enum(["draft", "open", "paid", "uncollectible", "void"]),
    created: z.number(),
    total: z.number(),
    amount_remaining: z.number(),
    customerId: z.string(),
    description: z.string(),
    invoice_pdf: z.string().url().optional(),
    collection_method: z.enum(["charge_automatically", "send_invoice"]),
    due_date: z.number().optional(), // Optional, only if collection_method is "send_invoice"
    days_until_due: z.number().optional(), // Optional, only if collection_method is "send_invoice"
    monthName: z.string(),
    year: z.number().min(2000).max(2100), // Year must be a valid year
}).strict();

export type InvoiceType = z.infer<typeof invoiceSchema>;