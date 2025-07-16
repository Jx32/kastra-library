export interface ProjectUpdate {
    updateText: string;
    isoCreatedAt: string;
}

export interface Project {
    _id?: string;
    title: string;
    description: string;
    progress: number;
    isoCreatedAt: string;
    updatedAt?: string;
    lastUpdateText?: string;
    isFinished: boolean;
    updates?: ProjectUpdate[];
}