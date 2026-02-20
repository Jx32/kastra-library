import z from "zod";

export interface ResidentialAccountLinkDto {
    link: string;
    expiresAt: number;
}

export const residentialAccountLinkDtoSchema = z.object({
    link: z.string(),
    expiresAt: z.number(),
}).strict();

export type ResidentialAccountLinkDtoType = z.infer<typeof residentialAccountLinkDtoSchema>;