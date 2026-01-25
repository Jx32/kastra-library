import { z } from "zod";

export interface File {
    name: string;
    mimeType: string;
    data: string;
}

export const fileSchema = z.object({
    name: z.string(),
    mimeType: z.string(),
    data: z.string().base64(),
});

export type FileType = z.infer<typeof fileSchema>;