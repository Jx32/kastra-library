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
  status: z5.enum(["active", "inactive"]),
  topicName: z5.string(),
  monthlyPaymentStripePriceId: z5.string().optional(),
  monthlyPaymentAmount: z5.string(),
  bankBanxicoKey: z5.string().optional(),
  // Optional field for Banxico key
  bankCLABE: z5.string().optional()
  // Optional field for bank account number
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
  topicName: z8.string().min(1, "Topic name cannot be empty"),
  accessEnabled: z8.boolean()
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
  paid_amount: z9.number().optional(),
  // Optional, amount paid by the customer
  have_payment_proof_file: z9.boolean()
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

// src/dto/automatic-charge.ts
import { z as z12 } from "zod";
var automaticChargeSchema = z12.object({
  customerId: z12.string(),
  collectionMethod: z12.enum(["charge_automatically", "send_invoice"]),
  paymentMethodId: z12.string().optional()
}).strict();

// src/dto/file.interface.ts
import { z as z13 } from "zod";
var fileSchema = z13.object({
  name: z13.string(),
  mimeType: z13.string(),
  data: z13.string().base64()
});

// src/dto/payment-proof.interface.ts
import { z as z14 } from "zod";
var paymentProofSchema = z14.object({
  invoiceId: z14.string(),
  file: fileSchema
});

// src/dto/invitation.ts
import { z as z18 } from "zod";

// src/enum/invitation-duration.enum.ts
import z15 from "zod";
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
var invitationDurationEnumSchema = z15.enum([
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
import { z as z16 } from "zod";
var InvitationTypeEnum = /* @__PURE__ */ ((InvitationTypeEnum3) => {
  InvitationTypeEnum3["QR"] = "qr";
  InvitationTypeEnum3["PIN"] = "pin";
  return InvitationTypeEnum3;
})(InvitationTypeEnum || {});
var invitationTypeEnumSchema = z16.enum([
  "qr" /* QR */,
  "pin" /* PIN */
]);

// src/dto/basic-user-info.ts
import { z as z17 } from "zod";
var BasicUserTypeEnum = /* @__PURE__ */ ((BasicUserTypeEnum3) => {
  BasicUserTypeEnum3["REGISTERED_USER"] = "registeredUser";
  BasicUserTypeEnum3["GUEST_USER"] = "guestUser";
  return BasicUserTypeEnum3;
})(BasicUserTypeEnum || {});
var basicUserTypeEnumSchema = z17.enum(["registeredUser" /* REGISTERED_USER */, "guestUser" /* GUEST_USER */]);
var BasicUserInfoSchema = z17.object({
  id: z17.string().uuid(),
  username: z17.string().min(1),
  name: z17.string(),
  avatarUrl: z17.string().url(),
  type: basicUserTypeEnumSchema
}).strict();

// src/dto/invitation.ts
var invitationSchema = z18.object({
  _id: z18.string().optional(),
  userId: z18.string().optional(),
  userType: basicUserTypeEnumSchema.optional(),
  type: invitationTypeEnumSchema,
  duration: invitationDurationEnumSchema,
  isoDueDate: z18.string(),
  used: z18.boolean().optional(),
  oneTimeUse: z18.boolean()
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
import { z as z19 } from "zod";
var guestSchema = z19.object({
  _id: z19.string().optional(),
  userSub: z19.string().uuid(),
  name: z19.string(),
  avatarUrl: z19.string().url(),
  isoCreatedOn: z19.string().datetime()
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
import { z as z20 } from "zod";
var projectUpdateSchema = z20.object({
  updateText: z20.string(),
  isoCreatedAt: z20.string()
});
var projectSchema = z20.object({
  _id: z20.string().optional(),
  residentialId: z20.string(),
  title: z20.string(),
  description: z20.string(),
  progress: z20.number().min(0).max(1),
  isoCreatedAt: z20.string(),
  updatedAt: z20.string().optional(),
  lastUpdateText: z20.string().optional(),
  isFinished: z20.boolean(),
  isArchived: z20.boolean().optional(),
  updates: z20.array(projectUpdateSchema).optional()
});

// src/dto/action-log.ts
import { z as z21 } from "zod";
var actionLogSchema = z21.object({
  residentialId: z21.string().optional(),
  module: z21.string(),
  httpMethod: z21.string(),
  userId: z21.string(),
  isoTimestamp: z21.string().datetime({ offset: false }),
  details: z21.string().optional()
});

// src/dto/notification.ts
import { z as z22 } from "zod";
var notificationSchema = z22.object({
  _id: z22.string().optional(),
  username: z22.string().optional(),
  // Optional field to associate the notification with a user
  residentialId: z22.string().optional(),
  // Optional field to associate the notification with a residential
  isGlobal: z22.boolean().optional(),
  // Optional field to indicate if the notification is global
  title: z22.string(),
  content: z22.string().max(250, "Content must be at most 500 characters long"),
  url: z22.string(),
  isoCreatedAt: z22.string().datetime({ offset: false }),
  status: z22.enum(["creating", "sending", "ok", "error"]).default("creating"),
  message: z22.string()
  // field for additional message
}).strict();

// src/dto/notification-dto.ts
import { z as z23 } from "zod";
var notificationDtoSchema = z23.object({
  id: z23.string().optional(),
  title: z23.string(),
  content: z23.string().max(250, "Content must be at most 250 characters long"),
  url: z23.string(),
  isoCreatedAt: z23.string().datetime({ offset: false }),
  message: z23.string(),
  // field for additional message
  read: z23.boolean()
}).strict();

// src/dto/video-call-token.interface.ts
import { z as z24 } from "zod";
var videoCallTokenSchema = z24.object({
  token: z24.string(),
  roomName: z24.string()
});

// src/dto/totem-call.ts
import { z as z25 } from "zod";
var totemCallStatusSchema = z25.object({
  status: z25.enum(["waiting", "rejected", "onCall", "ended"]),
  message: z25.string(),
  isoCreatedAt: z25.string().datetime({ offset: false })
}).strict();
var totemCallActionSchema = z25.object({
  action: z25.literal("doorOpen"),
  reason: z25.enum(["resident", "publicServices", "thrashRecollection", "emergencyServices", "other"]),
  remoteGateId: z25.string(),
  isoCreatedAt: z25.string().datetime({ offset: false })
}).strict();
var totemCallSchema = z25.object({
  _id: z25.string().optional(),
  residentialId: z25.string(),
  residentialName: z25.string().optional(),
  status: z25.enum(["waiting", "rejected", "onCall", "ended"]),
  isoCreatedAt: z25.string().datetime({ offset: false }),
  attendedByUsername: z25.string().optional(),
  roomName: z25.string().optional(),
  statusList: z25.array(totemCallStatusSchema).optional(),
  actionList: z25.array(totemCallActionSchema).optional()
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