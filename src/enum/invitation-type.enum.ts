import { z } from "zod";

export const enum InvitationTypeEnum {
    QR = "qr",
    PIN = "pin",
}

export const invitationTypeEnumSchema = z.enum([
    InvitationTypeEnum.QR,
    InvitationTypeEnum.PIN,
]);