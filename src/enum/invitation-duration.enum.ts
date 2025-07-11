import { Value } from "../dto/value";

export const enum InvitationDurationEnum {
    ONE_HOUR = "1 hour",
    TWO_HOURS = "2 hours",
    FOUR_HOURS = "4 hours",
    SIX_HOURS = "6 hours",
    TWELVE_HOURS = "12 hours",
    ONE_DAY = "1 day",
    TWO_DAYS = "2 days",
    THREE_DAYS = "3 days",
    ONE_WEEK = "1 week",
    TWO_WEEKS = "2 weeks",
    ONE_MONTH = "1 month",
    THREE_MONTHS = "3 months",
}

export const InvitationDurationValues: Value[] = [
    { value: InvitationDurationEnum.ONE_HOUR, label: "1 hora" },
    {  value: InvitationDurationEnum.TWO_HOURS, label: "2 horas" },
    { value: InvitationDurationEnum.FOUR_HOURS, label: "4 horas" },
    { value: InvitationDurationEnum.SIX_HOURS, label: "6 horas" },
    { value: InvitationDurationEnum.TWELVE_HOURS, label: "12 horas" },
    { value: InvitationDurationEnum.ONE_DAY, label: "1 día" },
    { value: InvitationDurationEnum.TWO_DAYS, label: "2 días" },
    { value: InvitationDurationEnum.THREE_DAYS, label: "3 días" },
    { value: InvitationDurationEnum.ONE_WEEK, label: "1 semana" },
    { value: InvitationDurationEnum.TWO_WEEKS, label: "2 semanas" },
    { value: InvitationDurationEnum.ONE_MONTH, label: "1 mes" },
    { value: InvitationDurationEnum.THREE_MONTHS, label: "3 meses" },
];