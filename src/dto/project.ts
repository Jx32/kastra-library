import { z } from "zod";

export interface ProjectUpdate {
    updateText: string;
    isoCreatedAt: string;
}

export interface Project {
    _id?: string;
    residentialId: string;
    title: string;
    description: string;
    progress: number;
    isoCreatedAt: string;
    updatedAt?: string;
    lastUpdateText?: string;
    isFinished: boolean;
    isArchived?: boolean;
    updates?: ProjectUpdate[];
}

export const projectUpdateSchema = z.object({
    updateText: z.string(),
    isoCreatedAt: z.string(),
});

export const projectSchema = z.object({
    _id: z.string().optional(),
    residentialId: z.string(),
    title: z.string(),
    description: z.string(),
    progress: z.number().min(0).max(1),
    isoCreatedAt: z.string(),
    updatedAt: z.string().optional(),
    lastUpdateText: z.string().optional(),
    isFinished: z.boolean(),
    isArchived: z.boolean().optional(),
    updates: z.array(projectUpdateSchema).optional(),
});

export type ProjectUpdateType = z.infer<typeof projectUpdateSchema>;
export type ProjectType = z.infer<typeof projectSchema>;