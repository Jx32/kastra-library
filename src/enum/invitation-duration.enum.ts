import z from "zod";

export const enum InvitationDurationEnum {
    ONE_HOUR,
    TWO_HOURS,
    FOUR_HOURS,
    SIX_HOURS,
    TWELVE_HOURS,
    ONE_DAY,
    TWO_DAYS,
    THREE_DAYS,
    ONE_WEEK,
    TWO_WEEKS,
    ONE_MONTH,
    THREE_MONTHS,
}

export const invitationDurationEnumSchema = z.enum([
    InvitationDurationEnum.ONE_HOUR.toString(),
    InvitationDurationEnum.TWO_HOURS.toString(),
    InvitationDurationEnum.FOUR_HOURS.toString(),
    InvitationDurationEnum.SIX_HOURS.toString(),
    InvitationDurationEnum.TWELVE_HOURS.toString(),
    InvitationDurationEnum.ONE_DAY.toString(),
    InvitationDurationEnum.TWO_DAYS.toString(),
    InvitationDurationEnum.THREE_DAYS.toString(),
    InvitationDurationEnum.ONE_WEEK.toString(),
    InvitationDurationEnum.TWO_WEEKS.toString(),
    InvitationDurationEnum.ONE_MONTH.toString(),
    InvitationDurationEnum.THREE_MONTHS.toString(),
]);