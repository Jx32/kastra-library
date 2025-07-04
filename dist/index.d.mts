import { ObjectId } from 'mongodb';
export { ObjectId } from 'mongodb';
import z$1, { z } from 'zod';
import * as bson from 'bson';

declare const PHONE_REGEX: RegExp;
declare const MONGODB_ID_REGEX: RegExp;

interface User {
    sub?: string;
    username?: string;
    name: string;
    email: string;
    email_verified?: boolean;
    phone_number?: string;
    phone_number_verified?: boolean;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
    residentialId: string;
    houseOwnerSub?: string;
    currentPinAccess?: string;
    stripeCustomerId?: string;
    iaBehaviour?: "formal" | "friendly" | "funny";
    avatarUrl?: string;
}
declare const userSchema: z.ZodObject<{
    sub: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    email: z.ZodString;
    email_verified: z.ZodOptional<z.ZodBoolean>;
    phone_number: z.ZodOptional<z.ZodString>;
    phone_number_verified: z.ZodOptional<z.ZodBoolean>;
    firstLogin: z.ZodBoolean;
    houseNumber: z.ZodString;
    role: z.ZodEnum<["houseOwner", "houseRelated", "helpDesk", "admin"]>;
    street: z.ZodString;
    residentialId: z.ZodString;
    houseOwnerSub: z.ZodOptional<z.ZodString>;
    currentPinAccess: z.ZodOptional<z.ZodString>;
    stripeCustomerId: z.ZodOptional<z.ZodString>;
    iaBehaviour: z.ZodOptional<z.ZodEnum<["formal", "friendly", "funny"]>>;
    avatarUrl: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name: string;
    email: string;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
    residentialId: string;
    sub?: string | undefined;
    username?: string | undefined;
    email_verified?: boolean | undefined;
    phone_number?: string | undefined;
    phone_number_verified?: boolean | undefined;
    houseOwnerSub?: string | undefined;
    currentPinAccess?: string | undefined;
    stripeCustomerId?: string | undefined;
    iaBehaviour?: "formal" | "friendly" | "funny" | undefined;
    avatarUrl?: string | undefined;
}, {
    name: string;
    email: string;
    firstLogin: boolean;
    houseNumber: string;
    role: "houseOwner" | "houseRelated" | "helpDesk" | "admin";
    street: string;
    residentialId: string;
    sub?: string | undefined;
    username?: string | undefined;
    email_verified?: boolean | undefined;
    phone_number?: string | undefined;
    phone_number_verified?: boolean | undefined;
    houseOwnerSub?: string | undefined;
    currentPinAccess?: string | undefined;
    stripeCustomerId?: string | undefined;
    iaBehaviour?: "formal" | "friendly" | "funny" | undefined;
    avatarUrl?: string | undefined;
}>;
type UserType = z.infer<typeof userSchema>;

interface PatchUser {
    name?: string;
    email?: string;
    phone_number?: string;
    firstLogin?: boolean;
    houseNumber?: string;
    street?: string;
    currentPinAccess?: string;
    iaBehaviour?: "formal" | "friendly" | "funny";
    avatarUrl?: string;
}
declare const patchUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone_number: z.ZodOptional<z.ZodString>;
    firstLogin: z.ZodOptional<z.ZodBoolean>;
    houseNumber: z.ZodOptional<z.ZodString>;
    street: z.ZodOptional<z.ZodString>;
    currentPinAccess: z.ZodOptional<z.ZodString>;
    iaBehaviour: z.ZodOptional<z.ZodEnum<["formal", "friendly", "funny"]>>;
    avatarUrl: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    phone_number?: string | undefined;
    firstLogin?: boolean | undefined;
    houseNumber?: string | undefined;
    street?: string | undefined;
    currentPinAccess?: string | undefined;
    iaBehaviour?: "formal" | "friendly" | "funny" | undefined;
    avatarUrl?: string | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    phone_number?: string | undefined;
    firstLogin?: boolean | undefined;
    houseNumber?: string | undefined;
    street?: string | undefined;
    currentPinAccess?: string | undefined;
    iaBehaviour?: "formal" | "friendly" | "funny" | undefined;
    avatarUrl?: string | undefined;
}>;
type PatchUserType = z.infer<typeof patchUserSchema>;

interface RegisterUserResponse {
    sub: string;
    temporaryPassword: string;
    username: string;
    name: string;
}

/**
 * Residential interface represents a residential area where remote devices are installed,
 * and where users can live or have a house.
 *
 * @interface Residential
 */

interface Residential {
    _id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    contactNumber?: string;
    status: "active" | "inactive";
    topicName: string;
    monthlyPaymentStripePriceId?: string;
    monthlyPaymentAmount: string;
}
declare const residentialSchema: z$1.ZodObject<{
    _id: z$1.ZodOptional<z$1.ZodEffects<z$1.ZodString, ObjectId, string>>;
    name: z$1.ZodString;
    address: z$1.ZodString;
    city: z$1.ZodString;
    state: z$1.ZodString;
    country: z$1.ZodString;
    postalCode: z$1.ZodString;
    contactNumber: z$1.ZodOptional<z$1.ZodString>;
    status: z$1.ZodEnum<["active", "inactive"]>;
    topicName: z$1.ZodString;
    monthlyPaymentStripePriceId: z$1.ZodOptional<z$1.ZodString>;
    monthlyPaymentAmount: z$1.ZodString;
}, "strict", z$1.ZodTypeAny, {
    name: string;
    status: "active" | "inactive";
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    topicName: string;
    monthlyPaymentAmount: string;
    _id?: ObjectId | undefined;
    contactNumber?: string | undefined;
    monthlyPaymentStripePriceId?: string | undefined;
}, {
    name: string;
    status: "active" | "inactive";
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    topicName: string;
    monthlyPaymentAmount: string;
    _id?: string | undefined;
    contactNumber?: string | undefined;
    monthlyPaymentStripePriceId?: string | undefined;
}>;
type ResidentialType = z$1.infer<typeof residentialSchema>;

/**
 * RemoteOpeningAction interface represents an action that will be performed on a remote device,
 * such as opening or closing a gate, and includes metadata about the action.
 * Also can be used to log actions performed by users or systems.
 *
 * @interface RemoteGateLog
 */

interface RemoteGateLog {
    remoteGateId: string;
    source: "app" | "totem";
    action: "open" | "enable" | "disable" | "create" | "delete" | "update";
    timestamp: string;
    userSub: string;
    reason?: string;
    additionalInfo?: any;
}
declare const remoteGateLogSchema: z$1.ZodObject<{
    remoteGateId: z$1.ZodOptional<z$1.ZodEffects<z$1.ZodString, ObjectId, string>>;
    source: z$1.ZodEnum<["app", "totem"]>;
    action: z$1.ZodEnum<["open", "enable", "disable", "create", "delete", "update"]>;
    timestamp: z$1.ZodEffects<z$1.ZodString, string, string>;
    userSub: z$1.ZodString;
    reason: z$1.ZodOptional<z$1.ZodString>;
    additionalInfo: z$1.ZodOptional<z$1.ZodAny>;
}, "strict", z$1.ZodTypeAny, {
    source: "app" | "totem";
    action: "open" | "enable" | "disable" | "create" | "delete" | "update";
    timestamp: string;
    userSub: string;
    remoteGateId?: ObjectId | undefined;
    reason?: string | undefined;
    additionalInfo?: any;
}, {
    source: "app" | "totem";
    action: "open" | "enable" | "disable" | "create" | "delete" | "update";
    timestamp: string;
    userSub: string;
    remoteGateId?: string | undefined;
    reason?: string | undefined;
    additionalInfo?: any;
}>;
type RemoteGateLogType = z$1.infer<typeof remoteGateLogSchema>;

/**
 * RemoteDevice Interface represents a gate that can be controlled remotely,
 * and are installed physically at the entrance or exit of a residential area.
 *
 * @interface RemoteGate
 */

interface RemoteGate {
    _id?: string;
    residentialId: string;
    name: string;
    type: "entrance" | "exit";
    thingName: string;
    enabled?: boolean;
}
declare const remoteGateSchema: z.ZodObject<{
    _id: z.ZodOptional<z.ZodEffects<z.ZodString, ObjectId, string>>;
    residentialId: z.ZodEffects<z.ZodString, ObjectId, string>;
    name: z.ZodString;
    type: z.ZodEnum<["entrance", "exit"]>;
    thingName: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    name: string;
    type: "entrance" | "exit";
    residentialId: ObjectId;
    thingName: string;
    _id?: ObjectId | undefined;
    enabled?: boolean | undefined;
}, {
    name: string;
    type: "entrance" | "exit";
    residentialId: string;
    thingName: string;
    _id?: string | undefined;
    enabled?: boolean | undefined;
}>;
type RemoteGateType = z.infer<typeof remoteGateSchema>;

interface UserSummary {
    remoteGates: RemoteGate[];
    currentPinAccess: string;
    topicName: string;
}
declare const userSummarySchema: z$1.ZodObject<{
    remoteGates: z$1.ZodArray<z$1.ZodObject<{
        _id: z$1.ZodOptional<z$1.ZodEffects<z$1.ZodString, bson.ObjectId, string>>;
        residentialId: z$1.ZodEffects<z$1.ZodString, bson.ObjectId, string>;
        name: z$1.ZodString;
        type: z$1.ZodEnum<["entrance", "exit"]>;
        thingName: z$1.ZodString;
        enabled: z$1.ZodOptional<z$1.ZodBoolean>;
    }, "strict", z$1.ZodTypeAny, {
        name: string;
        type: "entrance" | "exit";
        residentialId: bson.ObjectId;
        thingName: string;
        _id?: bson.ObjectId | undefined;
        enabled?: boolean | undefined;
    }, {
        name: string;
        type: "entrance" | "exit";
        residentialId: string;
        thingName: string;
        _id?: string | undefined;
        enabled?: boolean | undefined;
    }>, "many">;
    currentPinAccess: z$1.ZodString;
    topicName: z$1.ZodString;
}, "strict", z$1.ZodTypeAny, {
    currentPinAccess: string;
    topicName: string;
    remoteGates: {
        name: string;
        type: "entrance" | "exit";
        residentialId: bson.ObjectId;
        thingName: string;
        _id?: bson.ObjectId | undefined;
        enabled?: boolean | undefined;
    }[];
}, {
    currentPinAccess: string;
    topicName: string;
    remoteGates: {
        name: string;
        type: "entrance" | "exit";
        residentialId: string;
        thingName: string;
        _id?: string | undefined;
        enabled?: boolean | undefined;
    }[];
}>;
type UserSummaryType = z$1.infer<typeof userSummarySchema>;

interface UserBalance {
    balance: number;
    currency: string;
    subscriptionOverdue: boolean;
    payBeforeISODate?: string;
}

interface Invoice {
    id: string;
    status: "draft" | "open" | "paid" | "uncollectible" | "void";
    created: number;
    total: number;
    ammount_remaining: number;
    customerId: string;
    description: string;
    invoice_pdf?: string;
    collection_method: "charge_automatically" | "send_invoice";
    due_date?: number;
    days_until_due?: number;
    monthName: string;
    year: number;
    paid_amount?: number;
}
declare const invoiceSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<["draft", "open", "paid", "uncollectible", "void"]>;
    created: z.ZodNumber;
    total: z.ZodNumber;
    ammount_remaining: z.ZodNumber;
    customerId: z.ZodString;
    description: z.ZodString;
    invoice_pdf: z.ZodOptional<z.ZodString>;
    collection_method: z.ZodEnum<["charge_automatically", "send_invoice"]>;
    due_date: z.ZodOptional<z.ZodNumber>;
    days_until_due: z.ZodOptional<z.ZodNumber>;
    monthName: z.ZodString;
    year: z.ZodNumber;
    paid_amount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    status: "void" | "open" | "draft" | "paid" | "uncollectible";
    id: string;
    created: number;
    total: number;
    ammount_remaining: number;
    customerId: string;
    description: string;
    collection_method: "charge_automatically" | "send_invoice";
    monthName: string;
    year: number;
    invoice_pdf?: string | undefined;
    due_date?: number | undefined;
    days_until_due?: number | undefined;
    paid_amount?: number | undefined;
}, {
    status: "void" | "open" | "draft" | "paid" | "uncollectible";
    id: string;
    created: number;
    total: number;
    ammount_remaining: number;
    customerId: string;
    description: string;
    collection_method: "charge_automatically" | "send_invoice";
    monthName: string;
    year: number;
    invoice_pdf?: string | undefined;
    due_date?: number | undefined;
    days_until_due?: number | undefined;
    paid_amount?: number | undefined;
}>;
type InvoiceType = z.infer<typeof invoiceSchema>;

interface PaymentMethod {
    id: string;
    type: "card" | "bank_account" | "paypal";
    brand?: string;
    last4?: string;
    exp_month?: number;
    exp_year?: number;
}
declare const paymentMethodSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["card", "bank_account", "paypal"]>;
    brand: z.ZodOptional<z.ZodString>;
    last4: z.ZodOptional<z.ZodString>;
    exp_month: z.ZodOptional<z.ZodNumber>;
    exp_year: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "card" | "bank_account" | "paypal";
    id: string;
    brand?: string | undefined;
    last4?: string | undefined;
    exp_month?: number | undefined;
    exp_year?: number | undefined;
}, {
    type: "card" | "bank_account" | "paypal";
    id: string;
    brand?: string | undefined;
    last4?: string | undefined;
    exp_month?: number | undefined;
    exp_year?: number | undefined;
}>;
type PaymentMethodType = z.infer<typeof paymentMethodSchema>;

interface InvoicePaymentIntent {
    invoiceId: string;
    paymentMethodId: string;
}
declare const invoicePaymentIntentSchema: z.ZodObject<{
    invoiceId: z.ZodString;
    paymentMethodId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    invoiceId: string;
    paymentMethodId: string;
}, {
    invoiceId: string;
    paymentMethodId: string;
}>;
type InvoicePaymentIntentType = z.infer<typeof invoicePaymentIntentSchema>;

interface VideoCallToken {
    token: string;
    roomName: string;
}
declare const videoCallTokenSchema: z.ZodObject<{
    token: z.ZodString;
    roomName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    roomName: string;
}, {
    token: string;
    roomName: string;
}>;
type VideoCallTokenType = z.infer<typeof videoCallTokenSchema>;

interface PaymentIntentResponse {
    clientSecret: string;
    requiresAction: boolean;
}

interface AutomaticCharge {
    customerId: string;
    collectionMethod: "charge_automatically" | "send_invoice";
    paymentMethodId?: string;
}
declare const automaticChargeSchema: z.ZodObject<{
    customerId: z.ZodString;
    collectionMethod: z.ZodEnum<["charge_automatically", "send_invoice"]>;
    paymentMethodId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    customerId: string;
    collectionMethod: "charge_automatically" | "send_invoice";
    paymentMethodId?: string | undefined;
}, {
    customerId: string;
    collectionMethod: "charge_automatically" | "send_invoice";
    paymentMethodId?: string | undefined;
}>;
type AutomaticChargeType = z.infer<typeof automaticChargeSchema>;

interface AutomaticChargeSummaryResponse {
    collectionMethod: "charge_automatically" | "send_invoice";
    last4Digits: string;
}

declare enum UserRoleEnum {
    HOUSE_OWNER = "houseOwner",
    HOUSE_RELATED = "houseRelated",
    HELP_DESK = "helpDesk",
    ADMIN = "admin"
}

export { type AutomaticCharge, type AutomaticChargeSummaryResponse, type AutomaticChargeType, type Invoice, type InvoicePaymentIntent, type InvoicePaymentIntentType, type InvoiceType, MONGODB_ID_REGEX, PHONE_REGEX, type PatchUser, type PatchUserType, type PaymentIntentResponse, type PaymentMethod, type PaymentMethodType, type RegisterUserResponse, type RemoteGate, type RemoteGateLog, type RemoteGateLogType, type RemoteGateType, type Residential, type ResidentialType, type User, type UserBalance, UserRoleEnum, type UserSummary, type UserSummaryType, type UserType, type VideoCallToken, type VideoCallTokenType, automaticChargeSchema, invoicePaymentIntentSchema, invoiceSchema, patchUserSchema, paymentMethodSchema, remoteGateLogSchema, remoteGateSchema, residentialSchema, userSchema, userSummarySchema, videoCallTokenSchema };
