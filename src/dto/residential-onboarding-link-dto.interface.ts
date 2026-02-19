import z from "zod";

export interface ResidentialOnboardingLinkDto {
    onboardingLink: string;
    expiresAt: number;
}

export const residentialOnboardingLinkDtoSchema = z.object({
    onboardingLink: z.string(),
    expiresAt: z.number(),
}).strict();

export type ResidentialOnboardingLinkDtoType = z.infer<typeof residentialOnboardingLinkDtoSchema>;