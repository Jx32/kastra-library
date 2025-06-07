import { z } from 'zod';

interface User {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    phone_number?: string;
    phone_number_verified?: boolean;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
    residentialId: string;
    houseOwnerSub?: string;
}
declare const userSchema: z.ZodObject<{
    sub: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    email_verified: z.ZodBoolean;
    phone_number: z.ZodOptional<z.ZodString>;
    phone_number_verified: z.ZodOptional<z.ZodBoolean>;
    firstLogin: z.ZodBoolean;
    houseNumber: z.ZodString;
    role: z.ZodEnum<["houseOwner", "houseRelated", "helpDesk", "admin"]>;
    street: z.ZodString;
    residentialId: z.ZodString;
    houseOwnerSub: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
    residentialId: string;
    phone_number?: string | undefined;
    phone_number_verified?: boolean | undefined;
    houseOwnerSub?: string | undefined;
}, {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
    residentialId: string;
    phone_number?: string | undefined;
    phone_number_verified?: boolean | undefined;
    houseOwnerSub?: string | undefined;
}>;
type UserType = z.infer<typeof userSchema>;

interface PatchUser {
    name?: string;
    email?: string;
    phone_number?: string;
    firstLogin?: boolean;
    houseNumber?: string;
    street?: string;
}
declare const patchUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone_number: z.ZodOptional<z.ZodString>;
    firstLogin: z.ZodOptional<z.ZodBoolean>;
    houseNumber: z.ZodOptional<z.ZodString>;
    street: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    phone_number?: string | undefined;
    firstLogin?: boolean | undefined;
    houseNumber?: string | undefined;
    street?: string | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    phone_number?: string | undefined;
    firstLogin?: boolean | undefined;
    houseNumber?: string | undefined;
    street?: string | undefined;
}>;
type PatchUserType = z.infer<typeof patchUserSchema>;

interface RegisterUserResponse {
    sub: string;
    temporaryPassword: string;
}

declare enum UserRoleEnum {
    HOUSE_OWNER = "houseOwner",
    HOUSE_RELATED = "houseRelated",
    HELP_DESK = "helpDesk",
    ADMIN = "admin"
}

export { type PatchUser, type PatchUserType, type RegisterUserResponse, type User, UserRoleEnum, type UserType, userSchema };
