import z from "zod";

export const enum InvitationDurationEnum {
  ONE_HOUR = '1 hour',
  TWO_HOURS = '2 hours',
  FOUR_HOURS = '4 hours',
  SIX_HOURS = '6 hours',
  TWELVE_HOURS = '12 hours',
  ONE_DAY = '1 day',
  TWO_DAYS = '2 days',
  THREE_DAYS = '3 days',
  ONE_WEEK = '1 week',
  TWO_WEEKS = '2 weeks',
  ONE_MONTH = '1 month',
  THREE_MONTHS = '3 months',
}

export const invitationDurationEnumSchema = z.enum([
    InvitationDurationEnum.ONE_HOUR,
    InvitationDurationEnum.TWO_HOURS,
    InvitationDurationEnum.FOUR_HOURS,
    InvitationDurationEnum.SIX_HOURS,
    InvitationDurationEnum.TWELVE_HOURS,
    InvitationDurationEnum.ONE_DAY,
    InvitationDurationEnum.TWO_DAYS,
    InvitationDurationEnum.THREE_DAYS,
    InvitationDurationEnum.ONE_WEEK,
    InvitationDurationEnum.TWO_WEEKS,
    InvitationDurationEnum.ONE_MONTH,
    InvitationDurationEnum.THREE_MONTHS,
]);