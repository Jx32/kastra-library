// src/constants/constants.ts
var PHONE_REGEX = /^(\+[1-9]{2})\d{10}$/;

// src/dto/user.interface.ts
import { z } from "zod";
var userSchema = z.object({
  sub: z.string().uuid().optional(),
  username: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  email_verified: z.boolean().optional(),
  phone_number: z.string().regex(PHONE_REGEX).optional(),
  phone_number_verified: z.boolean().optional(),
  firstLogin: z.boolean(),
  houseNumber: z.string(),
  role: z.enum(["houseOwner", "houseRelated", "helpDesk", "admin", "tenant"]),
  street: z.string(),
  residentialId: z.string(),
  houseOwnerSub: z.string().uuid().optional(),
  currentPinAccess: z.string().length(4, "Current PIN must be 4 digits length").optional(),
  stripeCustomerId: z.string().optional(),
  // Optional field for Stripe customer ID
  iaBehaviour: z.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: z.string().optional(),
  // Optional field for avatar URL
  isUserDebtor: z.boolean().optional(),
  // Optional field to indicate if the user is a debtor
  enabled: z.boolean(),
  accessEnabled: z.boolean(),
  fcmToken: z.string().optional()
  // Optional field for FCM token
}).strict();
var userSchemaPartial = userSchema.partial();

// src/dto/patch-user.interface.ts
import { z as z2 } from "zod";
var patchUserSchema = z2.object({
  residentialId: z2.string().optional(),
  // Optional field for residential ID
  name: z2.string().optional(),
  email: z2.string().email().optional(),
  phone_number: z2.string().regex(PHONE_REGEX).optional(),
  firstLogin: z2.boolean().optional(),
  houseNumber: z2.string().optional(),
  street: z2.string().optional(),
  currentPinAccess: z2.string().length(4, "Current PIN must be 4 digits length").optional(),
  iaBehaviour: z2.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: z2.string().optional(),
  // Optional field for avatar URL
  role: z2.enum(["houseOwner", "houseRelated", "helpDesk", "admin", "tenant"]).optional()
  // Optional field for user role
}).strict();

// src/dto/reset-password.ts
import z3 from "zod";
var resetPasswordSchema = z3.object({
  username: z3.string().min(1, "Username is required")
});

// src/dto/confirm-forgot-password.ts
import z4 from "zod";
var confirmForgotPasswordSchema = z4.object({
  username: z4.string(),
  newPassword: z4.string(),
  confirmationCode: z4.string()
});

// src/dto/residential.interface.ts
import z5 from "zod";
var residentialSchema = z5.object({
  _id: z5.string().optional(),
  name: z5.string(),
  address: z5.string(),
  city: z5.string(),
  state: z5.string(),
  country: z5.string(),
  postalCode: z5.string(),
  contactNumber: z5.string().optional(),
  status: z5.enum(["active", "inactive"]),
  topicName: z5.string(),
  monthlyPaymentStripePriceId: z5.string().optional(),
  monthlyPaymentAmount: z5.string()
}).strict();

// src/dto/remote-gate-log.interface.ts
import z6 from "zod";
var remoteGateLogSchema = z6.object({
  remoteGateId: z6.string().optional(),
  source: z6.enum(["app", "totem"]),
  action: z6.enum(["open", "enable", "disable", "create", "delete", "update"]),
  timestamp: z6.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: z6.string().uuid(),
  reason: z6.string().optional(),
  additionalInfo: z6.any().optional()
}).strict();

// src/dto/remote-gate.interface.ts
import { z as z7 } from "zod";
var remoteGateSchema = z7.object({
  _id: z7.string().optional(),
  residentialId: z7.string(),
  name: z7.string(),
  type: z7.enum(["entrance", "exit"]),
  thingName: z7.string(),
  enabled: z7.boolean().optional()
  // Optional field to indicate if the gate is enabled
}).strict();

// src/dto/user-summary.interface.ts
import z8 from "zod";
var userSummarySchema = z8.object({
  remoteGates: z8.array(remoteGateSchema),
  currentPinAccess: z8.string().length(4, "Current PIN must be 4 digits length"),
  topicName: z8.string().min(1, "Topic name cannot be empty")
}).strict();

// src/dto/invoice.interface.ts
import { z as z9 } from "zod";
var invoiceSchema = z9.object({
  id: z9.string(),
  status: z9.enum(["draft", "open", "paid", "uncollectible", "void"]),
  created: z9.number(),
  total: z9.number(),
  ammount_remaining: z9.number(),
  customerId: z9.string(),
  description: z9.string(),
  invoice_pdf: z9.string().url().optional(),
  collection_method: z9.enum(["charge_automatically", "send_invoice"]),
  due_date: z9.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  days_until_due: z9.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  monthName: z9.string(),
  year: z9.number().min(2e3).max(2100),
  // Year must be a valid year
  paid_amount: z9.number().optional()
  // Optional, amount paid by the customer
}).strict();

// src/dto/payment-method.interface.ts
import { z as z10 } from "zod";
var paymentMethodSchema = z10.object({
  id: z10.string(),
  type: z10.enum(["card", "bank_account", "paypal"]),
  brand: z10.string().optional(),
  // Optional, only for card type
  last4: z10.string().optional(),
  // Optional, only for card or bank account type
  exp_month: z10.number().optional(),
  // Optional, only for card type
  exp_year: z10.number().optional()
  // Optional, only for card type
}).strict();

// src/dto/invoice-payment-intent.interface.ts
import { z as z11 } from "zod";
var invoicePaymentIntentSchema = z11.object({
  invoiceId: z11.string(),
  paymentMethodId: z11.string().min(1, "Payment method ID is required")
}).strict();

// src/dto/video-call-token.interface.ts
import { z as z12 } from "zod";
var videoCallTokenSchema = z12.object({
  token: z12.string(),
  roomName: z12.string()
});

// src/dto/automatic-charge.ts
import { z as z13 } from "zod";
var automaticChargeSchema = z13.object({
  customerId: z13.string(),
  collectionMethod: z13.enum(["charge_automatically", "send_invoice"]),
  paymentMethodId: z13.string().optional()
}).strict();

// src/dto/invitation.ts
import { z as z17 } from "zod";

// src/enum/invitation-duration.enum.ts
import z14 from "zod";
var InvitationDurationEnum = /* @__PURE__ */ ((InvitationDurationEnum3) => {
  InvitationDurationEnum3["ONE_HOUR"] = "1 hour";
  InvitationDurationEnum3["TWO_HOURS"] = "2 hours";
  InvitationDurationEnum3["FOUR_HOURS"] = "4 hours";
  InvitationDurationEnum3["SIX_HOURS"] = "6 hours";
  InvitationDurationEnum3["TWELVE_HOURS"] = "12 hours";
  InvitationDurationEnum3["ONE_DAY"] = "1 day";
  InvitationDurationEnum3["TWO_DAYS"] = "2 days";
  InvitationDurationEnum3["THREE_DAYS"] = "3 days";
  InvitationDurationEnum3["ONE_WEEK"] = "1 week";
  InvitationDurationEnum3["TWO_WEEKS"] = "2 weeks";
  InvitationDurationEnum3["ONE_MONTH"] = "1 month";
  InvitationDurationEnum3["THREE_MONTHS"] = "3 months";
  return InvitationDurationEnum3;
})(InvitationDurationEnum || {});
var invitationDurationEnumSchema = z14.enum([
  "1 hour" /* ONE_HOUR */,
  "2 hours" /* TWO_HOURS */,
  "4 hours" /* FOUR_HOURS */,
  "6 hours" /* SIX_HOURS */,
  "12 hours" /* TWELVE_HOURS */,
  "1 day" /* ONE_DAY */,
  "2 days" /* TWO_DAYS */,
  "3 days" /* THREE_DAYS */,
  "1 week" /* ONE_WEEK */,
  "2 weeks" /* TWO_WEEKS */,
  "1 month" /* ONE_MONTH */,
  "3 months" /* THREE_MONTHS */
]);

// src/enum/invitation-type.enum.ts
import { z as z15 } from "zod";
var InvitationTypeEnum = /* @__PURE__ */ ((InvitationTypeEnum3) => {
  InvitationTypeEnum3["QR"] = "qr";
  InvitationTypeEnum3["PIN"] = "pin";
  return InvitationTypeEnum3;
})(InvitationTypeEnum || {});
var invitationTypeEnumSchema = z15.enum([
  "qr" /* QR */,
  "pin" /* PIN */
]);

// src/dto/basic-user-info.ts
import { z as z16 } from "zod";
var BasicUserTypeEnum = /* @__PURE__ */ ((BasicUserTypeEnum3) => {
  BasicUserTypeEnum3["REGISTERED_USER"] = "registeredUser";
  BasicUserTypeEnum3["GUEST_USER"] = "guestUser";
  return BasicUserTypeEnum3;
})(BasicUserTypeEnum || {});
var basicUserTypeEnumSchema = z16.enum(["registeredUser" /* REGISTERED_USER */, "guestUser" /* GUEST_USER */]);
var BasicUserInfoSchema = z16.object({
  id: z16.string().uuid(),
  username: z16.string().min(1),
  name: z16.string(),
  avatarUrl: z16.string().url(),
  type: basicUserTypeEnumSchema
}).strict();

// src/dto/invitation.ts
var invitationSchema = z17.object({
  _id: z17.string().optional(),
  userId: z17.string().optional(),
  userType: basicUserTypeEnumSchema.optional(),
  type: invitationTypeEnumSchema,
  duration: invitationDurationEnumSchema,
  isoDueDate: z17.string(),
  used: z17.boolean().optional(),
  oneTimeUse: z17.boolean()
});
var invitationSchemaToInterface = (data) => {
  return {
    _id: data._id,
    userId: data.userId,
    userType: data.userType,
    type: data.type,
    duration: data.duration,
    isoDueDate: data.isoDueDate,
    used: data.used,
    oneTimeUse: data.oneTimeUse
  };
};

// src/dto/guest.ts
import { z as z18 } from "zod";
var guestSchema = z18.object({
  _id: z18.string().optional(),
  userSub: z18.string().uuid(),
  name: z18.string(),
  avatarUrl: z18.string().url(),
  isoCreatedOn: z18.string().datetime()
});

// src/enum/role.enum.ts
var UserRoleEnum = /* @__PURE__ */ ((UserRoleEnum2) => {
  UserRoleEnum2["HOUSE_OWNER"] = "houseOwner";
  UserRoleEnum2["HOUSE_RELATED"] = "houseRelated";
  UserRoleEnum2["HELP_DESK"] = "helpDesk";
  UserRoleEnum2["ADMIN"] = "admin";
  UserRoleEnum2["TENANT"] = "tenant";
  return UserRoleEnum2;
})(UserRoleEnum || {});

// src/dto/project.ts
import { z as z19 } from "zod";
var projectUpdateSchema = z19.object({
  updateText: z19.string(),
  isoCreatedAt: z19.string()
});
var projectSchema = z19.object({
  _id: z19.string().optional(),
  residentialId: z19.string(),
  title: z19.string(),
  description: z19.string(),
  progress: z19.number().min(0).max(1),
  isoCreatedAt: z19.string(),
  updatedAt: z19.string().optional(),
  lastUpdateText: z19.string().optional(),
  isFinished: z19.boolean(),
  isArchived: z19.boolean().optional(),
  updates: z19.array(projectUpdateSchema).optional()
});

// src/dto/action-log.ts
import { z as z20 } from "zod";
var actionLogSchema = z20.object({
  residentialId: z20.string().optional(),
  module: z20.string(),
  httpMethod: z20.string(),
  userId: z20.string(),
  isoTimestamp: z20.string().datetime({ offset: false }),
  details: z20.string().optional()
});

// src/dto/notification.ts
import { z as z21 } from "zod";
var notificationSchema = z21.object({
  _id: z21.string().optional(),
  username: z21.string().optional(),
  // Optional field to associate the notification with a user
  residentialId: z21.string().optional(),
  // Optional field to associate the notification with a residential
  isGlobal: z21.boolean().optional(),
  // Optional field to indicate if the notification is global
  title: z21.string(),
  content: z21.string().max(250, "Content must be at most 500 characters long"),
  url: z21.string(),
  isoCreatedAt: z21.string().datetime({ offset: false }),
  status: z21.enum(["creating", "sending", "ok", "error"]).default("creating")
}).strict();
export {
  BasicUserInfoSchema,
  BasicUserTypeEnum,
  InvitationDurationEnum,
  InvitationTypeEnum,
  PHONE_REGEX,
  UserRoleEnum,
  actionLogSchema,
  automaticChargeSchema,
  basicUserTypeEnumSchema,
  confirmForgotPasswordSchema,
  guestSchema,
  invitationDurationEnumSchema,
  invitationSchema,
  invitationSchemaToInterface,
  invitationTypeEnumSchema,
  invoicePaymentIntentSchema,
  invoiceSchema,
  notificationSchema,
  patchUserSchema,
  paymentMethodSchema,
  projectSchema,
  projectUpdateSchema,
  remoteGateLogSchema,
  remoteGateSchema,
  resetPasswordSchema,
  residentialSchema,
  userSchema,
  userSchemaPartial,
  userSummarySchema,
  videoCallTokenSchema
};
//# sourceMappingURL=index.mjs.map