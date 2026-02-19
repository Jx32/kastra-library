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
  fcmToken: z.string().optional(),
  // Optional field for FCM token
  allowNotifications: z.boolean().optional()
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
  role: z2.enum(["houseOwner", "houseRelated", "helpDesk", "admin", "tenant"]).optional(),
  // Optional field for user role
  allowNotifications: z2.boolean().optional()
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
  contactEmail: z5.string().email(),
  status: z5.enum(["active", "inactive"]),
  topicName: z5.string(),
  monthlyPaymentStripePriceId: z5.string().optional(),
  monthlyPaymentAmount: z5.number(),
  lastMonthlyPaymentUpdatedAt: z5.number().optional(),
  bankBanxicoKey: z5.string().optional(),
  // Optional field for Banxico key
  bankCLABE: z5.string().optional(),
  // Optional field for bank account number
  onboardingStatus: z5.enum(["pending", "completed"]),
  businessType: z5.enum(["individual", "company"]),
  stripeAccountId: z5.string().optional()
}).strict();

// src/dto/residential-onboarding-link-dto.interface.ts
import z6 from "zod";
var residentialOnboardingLinkDtoSchema = z6.object({
  onboardingLink: z6.string(),
  expiresAt: z6.number()
}).strict();

// src/dto/remote-gate-log.interface.ts
import z7 from "zod";
var remoteGateLogSchema = z7.object({
  remoteGateId: z7.string().optional(),
  source: z7.enum(["app", "totem"]),
  action: z7.enum(["open", "enable", "disable", "create", "delete", "update"]),
  timestamp: z7.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: z7.string().uuid(),
  reason: z7.string().optional(),
  additionalInfo: z7.any().optional()
}).strict();

// src/dto/remote-gate.interface.ts
import { z as z8 } from "zod";
var remoteGateSchema = z8.object({
  _id: z8.string().optional(),
  residentialId: z8.string(),
  name: z8.string(),
  type: z8.enum(["entrance", "exit"]),
  thingName: z8.string(),
  enabled: z8.boolean().optional()
  // Optional field to indicate if the gate is enabled
}).strict();

// src/dto/user-summary.interface.ts
import z9 from "zod";
var userSummarySchema = z9.object({
  remoteGates: z9.array(remoteGateSchema),
  currentPinAccess: z9.string().length(4, "Current PIN must be 4 digits length"),
  topicName: z9.string().min(1, "Topic name cannot be empty"),
  accessEnabled: z9.boolean()
}).strict();

// src/dto/invoice.interface.ts
import { z as z10 } from "zod";
var invoiceSchema = z10.object({
  id: z10.string(),
  status: z10.enum(["draft", "open", "paid", "uncollectible", "void"]),
  created: z10.number(),
  total: z10.number(),
  ammount_remaining: z10.number(),
  customerId: z10.string(),
  description: z10.string(),
  invoice_pdf: z10.string().url().optional(),
  collection_method: z10.enum(["charge_automatically", "send_invoice"]),
  due_date: z10.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  days_until_due: z10.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  monthName: z10.string(),
  year: z10.number().min(2e3).max(2100),
  // Year must be a valid year
  paid_amount: z10.number().optional(),
  // Optional, amount paid by the customer
  have_payment_proof_file: z10.boolean(),
  receipt_url: z10.string().url().optional()
  // URL to the receipt PDF
}).strict();

// src/dto/payment-method.interface.ts
import { z as z11 } from "zod";
var paymentMethodSchema = z11.object({
  id: z11.string(),
  type: z11.enum(["card", "bank_account", "paypal"]),
  brand: z11.string().optional(),
  // Optional, only for card type
  last4: z11.string().optional(),
  // Optional, only for card or bank account type
  exp_month: z11.number().optional(),
  // Optional, only for card type
  exp_year: z11.number().optional()
  // Optional, only for card type
}).strict();

// src/dto/invoice-payment-intent.interface.ts
import { z as z12 } from "zod";
var invoicePaymentIntentSchema = z12.object({
  invoiceId: z12.string(),
  paymentMethodId: z12.string().min(1, "Payment method ID is required")
}).strict();

// src/dto/automatic-charge.ts
import { z as z13 } from "zod";
var automaticChargeSchema = z13.object({
  customerId: z13.string(),
  collectionMethod: z13.enum(["charge_automatically", "send_invoice"]),
  paymentMethodId: z13.string().optional()
}).strict();

// src/dto/file.interface.ts
import { z as z14 } from "zod";
var fileSchema = z14.object({
  name: z14.string(),
  mimeType: z14.string(),
  data: z14.string().base64()
});

// src/dto/payment-proof.interface.ts
import { z as z15 } from "zod";
var paymentProofSchema = z15.object({
  invoiceId: z15.string(),
  file: fileSchema
});

// src/dto/invitation.ts
import { z as z19 } from "zod";

// src/enum/invitation-duration.enum.ts
import z16 from "zod";
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
var invitationDurationEnumSchema = z16.enum([
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
import { z as z17 } from "zod";
var InvitationTypeEnum = /* @__PURE__ */ ((InvitationTypeEnum3) => {
  InvitationTypeEnum3["QR"] = "qr";
  InvitationTypeEnum3["PIN"] = "pin";
  return InvitationTypeEnum3;
})(InvitationTypeEnum || {});
var invitationTypeEnumSchema = z17.enum([
  "qr" /* QR */,
  "pin" /* PIN */
]);

// src/dto/basic-user-info.ts
import { z as z18 } from "zod";
var BasicUserTypeEnum = /* @__PURE__ */ ((BasicUserTypeEnum3) => {
  BasicUserTypeEnum3["REGISTERED_USER"] = "registeredUser";
  BasicUserTypeEnum3["GUEST_USER"] = "guestUser";
  return BasicUserTypeEnum3;
})(BasicUserTypeEnum || {});
var basicUserTypeEnumSchema = z18.enum(["registeredUser" /* REGISTERED_USER */, "guestUser" /* GUEST_USER */]);
var BasicUserInfoSchema = z18.object({
  id: z18.string().uuid(),
  username: z18.string().min(1),
  name: z18.string(),
  avatarUrl: z18.string().url(),
  type: basicUserTypeEnumSchema
}).strict();

// src/dto/invitation.ts
var invitationSchema = z19.object({
  _id: z19.string().optional(),
  userId: z19.string().optional(),
  userType: basicUserTypeEnumSchema.optional(),
  type: invitationTypeEnumSchema,
  duration: invitationDurationEnumSchema,
  isoDueDate: z19.string(),
  used: z19.boolean().optional(),
  oneTimeUse: z19.boolean()
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
import { z as z20 } from "zod";
var guestSchema = z20.object({
  _id: z20.string().optional(),
  userSub: z20.string().uuid(),
  name: z20.string(),
  avatarUrl: z20.string().url(),
  isoCreatedOn: z20.string().datetime()
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
import { z as z21 } from "zod";
var projectUpdateSchema = z21.object({
  updateText: z21.string(),
  isoCreatedAt: z21.string()
});
var projectSchema = z21.object({
  _id: z21.string().optional(),
  residentialId: z21.string(),
  title: z21.string(),
  description: z21.string(),
  progress: z21.number().min(0).max(1),
  isoCreatedAt: z21.string(),
  updatedAt: z21.string().optional(),
  lastUpdateText: z21.string().optional(),
  isFinished: z21.boolean(),
  isArchived: z21.boolean().optional(),
  updates: z21.array(projectUpdateSchema).optional()
});

// src/dto/action-log.ts
import { z as z22 } from "zod";
var actionLogSchema = z22.object({
  residentialId: z22.string().optional(),
  module: z22.string(),
  httpMethod: z22.string(),
  userId: z22.string(),
  isoTimestamp: z22.string().datetime({ offset: false }),
  details: z22.string().optional()
});

// src/dto/notification.ts
import { z as z23 } from "zod";
var notificationSchema = z23.object({
  _id: z23.string().optional(),
  username: z23.string().optional(),
  // Optional field to associate the notification with a user
  residentialId: z23.string().optional(),
  // Optional field to associate the notification with a residential
  isGlobal: z23.boolean().optional(),
  // Optional field to indicate if the notification is global
  title: z23.string(),
  content: z23.string().max(250, "Content must be at most 500 characters long"),
  url: z23.string(),
  isoCreatedAt: z23.string().datetime({ offset: false }),
  status: z23.enum(["creating", "sending", "ok", "error"]).default("creating"),
  message: z23.string()
  // field for additional message
}).strict();

// src/dto/notification-dto.ts
import { z as z24 } from "zod";
var notificationDtoSchema = z24.object({
  id: z24.string().optional(),
  title: z24.string(),
  content: z24.string().max(250, "Content must be at most 250 characters long"),
  url: z24.string(),
  isoCreatedAt: z24.string().datetime({ offset: false }),
  message: z24.string(),
  // field for additional message
  read: z24.boolean()
}).strict();

// src/dto/video-call-token.interface.ts
import { z as z25 } from "zod";
var videoCallTokenSchema = z25.object({
  token: z25.string(),
  roomName: z25.string()
});

// src/dto/totem-call.ts
import { z as z26 } from "zod";
var totemCallStatusSchema = z26.object({
  status: z26.enum(["waiting", "rejected", "onCall", "ended"]),
  message: z26.string(),
  isoCreatedAt: z26.string().datetime({ offset: false })
}).strict();
var totemCallActionSchema = z26.object({
  action: z26.literal("doorOpen"),
  reason: z26.enum(["resident", "publicServices", "thrashRecollection", "emergencyServices", "other"]),
  remoteGateId: z26.string(),
  isoCreatedAt: z26.string().datetime({ offset: false })
}).strict();
var totemCallSchema = z26.object({
  _id: z26.string().optional(),
  residentialId: z26.string(),
  residentialName: z26.string().optional(),
  status: z26.enum(["waiting", "rejected", "onCall", "ended"]),
  isoCreatedAt: z26.string().datetime({ offset: false }),
  attendedByUsername: z26.string().optional(),
  roomName: z26.string().optional(),
  statusList: z26.array(totemCallStatusSchema).optional(),
  actionList: z26.array(totemCallActionSchema).optional()
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
  fileSchema,
  guestSchema,
  invitationDurationEnumSchema,
  invitationSchema,
  invitationSchemaToInterface,
  invitationTypeEnumSchema,
  invoicePaymentIntentSchema,
  invoiceSchema,
  notificationDtoSchema,
  notificationSchema,
  patchUserSchema,
  paymentMethodSchema,
  paymentProofSchema,
  projectSchema,
  projectUpdateSchema,
  remoteGateLogSchema,
  remoteGateSchema,
  resetPasswordSchema,
  residentialOnboardingLinkDtoSchema,
  residentialSchema,
  totemCallActionSchema,
  totemCallSchema,
  totemCallStatusSchema,
  userSchema,
  userSchemaPartial,
  userSummarySchema,
  videoCallTokenSchema
};
//# sourceMappingURL=index.mjs.map