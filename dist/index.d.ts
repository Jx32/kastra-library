interface User {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    phone_number: string;
    phone_number_verified: boolean;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
}

interface PatchUser {
    name?: string;
    email?: string;
    phone_number?: string;
    firstLogin?: boolean;
    houseNumber?: string;
    street?: string;
}

export type { PatchUser, User };
