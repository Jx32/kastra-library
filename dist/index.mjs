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
  role: z.enum(["houseOwner", "houseRelated", "helpDesk", "admin"]),
  street: z.string(),
  residentialId: z.string(),
  houseOwnerSub: z.string().uuid().optional(),
  currentPinAccess: z.string().length(4, "Current PIN must be 4 digits length").optional(),
  stripeCustomerId: z.string().optional(),
  // Optional field for Stripe customer ID
  iaBehaviour: z.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: z.string().optional()
  // Optional field for avatar URL
}).strict();

// src/dto/patch-user.interface.ts
import { z as z2 } from "zod";
var patchUserSchema = z2.object({
  name: z2.string().optional(),
  email: z2.string().email().optional(),
  phone_number: z2.string().regex(PHONE_REGEX).optional(),
  firstLogin: z2.boolean().optional(),
  houseNumber: z2.string().optional(),
  street: z2.string().optional(),
  currentPinAccess: z2.string().length(4, "Current PIN must be 4 digits length").optional(),
  iaBehaviour: z2.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: z2.string().optional()
  // Optional field for avatar URL
}).strict();

// src/dto/reset-password.ts
import z3 from "zod";
var resetPasswordSchema = z3.object({
  accessToken: z3.string(),
  previousPassword: z3.string(),
  newPassword: z3.string().min(8, "New password must be at least 8 characters long").regex(/[0-9]/, "New password must contain at least one number").regex(/[!@#$%^&*(),.?":{}|<>]/, "New password must contain at least one special character").regex(/[A-Z]/, "New password must contain at least one uppercase letter").regex(/[a-z]/, "New password must contain at least one lowercase letter")
});

// src/dto/residential.interface.ts
import z4 from "zod";
var residentialSchema = z4.object({
  _id: z4.string().optional(),
  name: z4.string(),
  address: z4.string(),
  city: z4.string(),
  state: z4.string(),
  country: z4.string(),
  postalCode: z4.string(),
  contactNumber: z4.string().optional(),
  status: z4.enum(["active", "inactive"]),
  topicName: z4.string(),
  monthlyPaymentStripePriceId: z4.string().optional(),
  monthlyPaymentAmount: z4.string()
}).strict();

// src/dto/remote-gate-log.interface.ts
import z5 from "zod";
var remoteGateLogSchema = z5.object({
  remoteGateId: z5.string().optional(),
  source: z5.enum(["app", "totem"]),
  action: z5.enum(["open", "enable", "disable", "create", "delete", "update"]),
  timestamp: z5.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: z5.string().uuid(),
  reason: z5.string().optional(),
  additionalInfo: z5.any().optional()
}).strict();

// src/dto/remote-gate.interface.ts
import { z as z6 } from "zod";
var remoteGateSchema = z6.object({
  _id: z6.string().optional(),
  residentialId: z6.string(),
  name: z6.string(),
  type: z6.enum(["entrance", "exit"]),
  thingName: z6.string(),
  enabled: z6.boolean().optional()
  // Optional field to indicate if the gate is enabled
}).strict();

// src/dto/user-summary.interface.ts
import z7 from "zod";
var userSummarySchema = z7.object({
  remoteGates: z7.array(remoteGateSchema),
  currentPinAccess: z7.string().length(4, "Current PIN must be 4 digits length"),
  topicName: z7.string().min(1, "Topic name cannot be empty")
}).strict();

// src/dto/invoice.interface.ts
import { z as z8 } from "zod";
var invoiceSchema = z8.object({
  id: z8.string(),
  status: z8.enum(["draft", "open", "paid", "uncollectible", "void"]),
  created: z8.number(),
  total: z8.number(),
  ammount_remaining: z8.number(),
  customerId: z8.string(),
  description: z8.string(),
  invoice_pdf: z8.string().url().optional(),
  collection_method: z8.enum(["charge_automatically", "send_invoice"]),
  due_date: z8.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  days_until_due: z8.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  monthName: z8.string(),
  year: z8.number().min(2e3).max(2100),
  // Year must be a valid year
  paid_amount: z8.number().optional()
  // Optional, amount paid by the customer
}).strict();

// src/dto/payment-method.interface.ts
import { z as z9 } from "zod";
var paymentMethodSchema = z9.object({
  id: z9.string(),
  type: z9.enum(["card", "bank_account", "paypal"]),
  brand: z9.string().optional(),
  // Optional, only for card type
  last4: z9.string().optional(),
  // Optional, only for card or bank account type
  exp_month: z9.number().optional(),
  // Optional, only for card type
  exp_year: z9.number().optional()
  // Optional, only for card type
}).strict();

// src/dto/invoice-payment-intent.interface.ts
import { z as z10 } from "zod";
var invoicePaymentIntentSchema = z10.object({
  invoiceId: z10.string(),
  paymentMethodId: z10.string().min(1, "Payment method ID is required")
}).strict();

// src/dto/video-call-token.interface.ts
import { z as z11 } from "zod";
var videoCallTokenSchema = z11.object({
  token: z11.string(),
  roomName: z11.string()
});

// src/dto/automatic-charge.ts
import { z as z12 } from "zod";
var automaticChargeSchema = z12.object({
  customerId: z12.string(),
  collectionMethod: z12.enum(["charge_automatically", "send_invoice"]),
  paymentMethodId: z12.string().optional()
}).strict();

// src/dto/invitation.ts
import { z as z16 } from "zod";

// src/enum/invitation-duration.enum.ts
import z13 from "zod";
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
var invitationDurationEnumSchema = z13.enum([
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
import { z as z14 } from "zod";
var InvitationTypeEnum = /* @__PURE__ */ ((InvitationTypeEnum3) => {
  InvitationTypeEnum3["QR"] = "qr";
  InvitationTypeEnum3["PIN"] = "pin";
  return InvitationTypeEnum3;
})(InvitationTypeEnum || {});
var invitationTypeEnumSchema = z14.enum([
  "qr" /* QR */,
  "pin" /* PIN */
]);

// src/dto/basic-user-info.ts
import { z as z15 } from "zod";
var BasicUserTypeEnum = /* @__PURE__ */ ((BasicUserTypeEnum3) => {
  BasicUserTypeEnum3["REGISTERED_USER"] = "registeredUser";
  BasicUserTypeEnum3["GUEST_USER"] = "guestUser";
  return BasicUserTypeEnum3;
})(BasicUserTypeEnum || {});
var basicUserTypeEnumSchema = z15.enum(["registeredUser" /* REGISTERED_USER */, "guestUser" /* GUEST_USER */]);
var BasicUserInfoSchema = z15.object({
  id: z15.string().uuid(),
  name: z15.string(),
  avatarUrl: z15.string().url(),
  type: basicUserTypeEnumSchema
}).strict();

// src/dto/invitation.ts
var invitationSchema = z16.object({
  _id: z16.string().optional(),
  userId: z16.string().optional(),
  userType: basicUserTypeEnumSchema.optional(),
  type: invitationTypeEnumSchema,
  duration: invitationDurationEnumSchema,
  isoDueDate: z16.string(),
  used: z16.boolean().optional(),
  oneTimeUse: z16.boolean()
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
import { z as z17 } from "zod";
var guestSchema = z17.object({
  _id: z17.string().optional(),
  userSub: z17.string().uuid(),
  name: z17.string(),
  avatarUrl: z17.string().url(),
  isoCreatedOn: z17.string().datetime()
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
import { z as z18 } from "zod";
var projectUpdateSchema = z18.object({
  updateText: z18.string(),
  isoCreatedAt: z18.string()
});
var projectSchema = z18.object({
  _id: z18.string().optional(),
  residentialId: z18.string(),
  title: z18.string(),
  description: z18.string(),
  progress: z18.number().min(0).max(1),
  isoCreatedAt: z18.string(),
  updatedAt: z18.string().optional(),
  lastUpdateText: z18.string().optional(),
  isFinished: z18.boolean(),
  isArchived: z18.boolean().optional(),
  updates: z18.array(projectUpdateSchema).optional()
});
export {
  BasicUserInfoSchema,
  BasicUserTypeEnum,
  InvitationDurationEnum,
  InvitationTypeEnum,
  PHONE_REGEX,
  UserRoleEnum,
  automaticChargeSchema,
  basicUserTypeEnumSchema,
  guestSchema,
  invitationDurationEnumSchema,
  invitationSchema,
  invitationSchemaToInterface,
  invitationTypeEnumSchema,
  invoicePaymentIntentSchema,
  invoiceSchema,
  patchUserSchema,
  paymentMethodSchema,
  projectSchema,
  projectUpdateSchema,
  remoteGateLogSchema,
  remoteGateSchema,
  resetPasswordSchema,
  residentialSchema,
  userSchema,
  userSummarySchema,
  videoCallTokenSchema
};
//# sourceMappingURL=index.mjs.map