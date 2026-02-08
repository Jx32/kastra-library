"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BasicUserInfoSchema: () => BasicUserInfoSchema,
  BasicUserTypeEnum: () => BasicUserTypeEnum,
  InvitationDurationEnum: () => InvitationDurationEnum,
  InvitationTypeEnum: () => InvitationTypeEnum,
  PHONE_REGEX: () => PHONE_REGEX,
  UserRoleEnum: () => UserRoleEnum,
  actionLogSchema: () => actionLogSchema,
  automaticChargeSchema: () => automaticChargeSchema,
  basicUserTypeEnumSchema: () => basicUserTypeEnumSchema,
  confirmForgotPasswordSchema: () => confirmForgotPasswordSchema,
  fileSchema: () => fileSchema,
  guestSchema: () => guestSchema,
  invitationDurationEnumSchema: () => invitationDurationEnumSchema,
  invitationSchema: () => invitationSchema,
  invitationSchemaToInterface: () => invitationSchemaToInterface,
  invitationTypeEnumSchema: () => invitationTypeEnumSchema,
  invoicePaymentIntentSchema: () => invoicePaymentIntentSchema,
  invoiceSchema: () => invoiceSchema,
  notificationDtoSchema: () => notificationDtoSchema,
  notificationSchema: () => notificationSchema,
  patchUserSchema: () => patchUserSchema,
  paymentMethodSchema: () => paymentMethodSchema,
  paymentProofSchema: () => paymentProofSchema,
  projectSchema: () => projectSchema,
  projectUpdateSchema: () => projectUpdateSchema,
  remoteGateLogSchema: () => remoteGateLogSchema,
  remoteGateSchema: () => remoteGateSchema,
  resetPasswordSchema: () => resetPasswordSchema,
  residentialSchema: () => residentialSchema,
  totemCallActionSchema: () => totemCallActionSchema,
  totemCallSchema: () => totemCallSchema,
  totemCallStatusSchema: () => totemCallStatusSchema,
  userSchema: () => userSchema,
  userSchemaPartial: () => userSchemaPartial,
  userSummarySchema: () => userSummarySchema,
  videoCallTokenSchema: () => videoCallTokenSchema
});
module.exports = __toCommonJS(src_exports);

// src/constants/constants.ts
var PHONE_REGEX = /^(\+[1-9]{2})\d{10}$/;

// src/dto/user.interface.ts
var import_zod = require("zod");
var userSchema = import_zod.z.object({
  sub: import_zod.z.string().uuid().optional(),
  username: import_zod.z.string().optional(),
  name: import_zod.z.string(),
  email: import_zod.z.string().email(),
  email_verified: import_zod.z.boolean().optional(),
  phone_number: import_zod.z.string().regex(PHONE_REGEX).optional(),
  phone_number_verified: import_zod.z.boolean().optional(),
  firstLogin: import_zod.z.boolean(),
  houseNumber: import_zod.z.string(),
  role: import_zod.z.enum(["houseOwner", "houseRelated", "helpDesk", "admin", "tenant"]),
  street: import_zod.z.string(),
  residentialId: import_zod.z.string(),
  houseOwnerSub: import_zod.z.string().uuid().optional(),
  currentPinAccess: import_zod.z.string().length(4, "Current PIN must be 4 digits length").optional(),
  stripeCustomerId: import_zod.z.string().optional(),
  // Optional field for Stripe customer ID
  iaBehaviour: import_zod.z.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: import_zod.z.string().optional(),
  // Optional field for avatar URL
  isUserDebtor: import_zod.z.boolean().optional(),
  // Optional field to indicate if the user is a debtor
  enabled: import_zod.z.boolean(),
  accessEnabled: import_zod.z.boolean(),
  fcmToken: import_zod.z.string().optional(),
  // Optional field for FCM token
  allowNotifications: import_zod.z.boolean().optional()
}).strict();
var userSchemaPartial = userSchema.partial();

// src/dto/patch-user.interface.ts
var import_zod2 = require("zod");
var patchUserSchema = import_zod2.z.object({
  residentialId: import_zod2.z.string().optional(),
  // Optional field for residential ID
  name: import_zod2.z.string().optional(),
  email: import_zod2.z.string().email().optional(),
  phone_number: import_zod2.z.string().regex(PHONE_REGEX).optional(),
  firstLogin: import_zod2.z.boolean().optional(),
  houseNumber: import_zod2.z.string().optional(),
  street: import_zod2.z.string().optional(),
  currentPinAccess: import_zod2.z.string().length(4, "Current PIN must be 4 digits length").optional(),
  iaBehaviour: import_zod2.z.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: import_zod2.z.string().optional(),
  // Optional field for avatar URL
  role: import_zod2.z.enum(["houseOwner", "houseRelated", "helpDesk", "admin", "tenant"]).optional(),
  // Optional field for user role
  allowNotifications: import_zod2.z.boolean().optional()
}).strict();

// src/dto/reset-password.ts
var import_zod3 = __toESM(require("zod"));
var resetPasswordSchema = import_zod3.default.object({
  username: import_zod3.default.string().min(1, "Username is required")
});

// src/dto/confirm-forgot-password.ts
var import_zod4 = __toESM(require("zod"));
var confirmForgotPasswordSchema = import_zod4.default.object({
  username: import_zod4.default.string(),
  newPassword: import_zod4.default.string(),
  confirmationCode: import_zod4.default.string()
});

// src/dto/residential.interface.ts
var import_zod5 = __toESM(require("zod"));
var residentialSchema = import_zod5.default.object({
  _id: import_zod5.default.string().optional(),
  name: import_zod5.default.string(),
  address: import_zod5.default.string(),
  city: import_zod5.default.string(),
  state: import_zod5.default.string(),
  country: import_zod5.default.string(),
  postalCode: import_zod5.default.string(),
  contactNumber: import_zod5.default.string().optional(),
  status: import_zod5.default.enum(["active", "inactive"]),
  topicName: import_zod5.default.string(),
  monthlyPaymentStripePriceId: import_zod5.default.string().optional(),
  monthlyPaymentAmount: import_zod5.default.string(),
  bankBanxicoKey: import_zod5.default.string().optional(),
  // Optional field for Banxico key
  bankCLABE: import_zod5.default.string().optional()
  // Optional field for bank account number
}).strict();

// src/dto/remote-gate-log.interface.ts
var import_zod6 = __toESM(require("zod"));
var remoteGateLogSchema = import_zod6.default.object({
  remoteGateId: import_zod6.default.string().optional(),
  source: import_zod6.default.enum(["app", "totem"]),
  action: import_zod6.default.enum(["open", "enable", "disable", "create", "delete", "update"]),
  timestamp: import_zod6.default.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: import_zod6.default.string().uuid(),
  reason: import_zod6.default.string().optional(),
  additionalInfo: import_zod6.default.any().optional()
}).strict();

// src/dto/remote-gate.interface.ts
var import_zod7 = require("zod");
var remoteGateSchema = import_zod7.z.object({
  _id: import_zod7.z.string().optional(),
  residentialId: import_zod7.z.string(),
  name: import_zod7.z.string(),
  type: import_zod7.z.enum(["entrance", "exit"]),
  thingName: import_zod7.z.string(),
  enabled: import_zod7.z.boolean().optional()
  // Optional field to indicate if the gate is enabled
}).strict();

// src/dto/user-summary.interface.ts
var import_zod8 = __toESM(require("zod"));
var userSummarySchema = import_zod8.default.object({
  remoteGates: import_zod8.default.array(remoteGateSchema),
  currentPinAccess: import_zod8.default.string().length(4, "Current PIN must be 4 digits length"),
  topicName: import_zod8.default.string().min(1, "Topic name cannot be empty")
}).strict();

// src/dto/invoice.interface.ts
var import_zod9 = require("zod");
var invoiceSchema = import_zod9.z.object({
  id: import_zod9.z.string(),
  status: import_zod9.z.enum(["draft", "open", "paid", "uncollectible", "void"]),
  created: import_zod9.z.number(),
  total: import_zod9.z.number(),
  ammount_remaining: import_zod9.z.number(),
  customerId: import_zod9.z.string(),
  description: import_zod9.z.string(),
  invoice_pdf: import_zod9.z.string().url().optional(),
  collection_method: import_zod9.z.enum(["charge_automatically", "send_invoice"]),
  due_date: import_zod9.z.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  days_until_due: import_zod9.z.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  monthName: import_zod9.z.string(),
  year: import_zod9.z.number().min(2e3).max(2100),
  // Year must be a valid year
  paid_amount: import_zod9.z.number().optional(),
  // Optional, amount paid by the customer
  have_payment_proof_file: import_zod9.z.boolean()
}).strict();

// src/dto/payment-method.interface.ts
var import_zod10 = require("zod");
var paymentMethodSchema = import_zod10.z.object({
  id: import_zod10.z.string(),
  type: import_zod10.z.enum(["card", "bank_account", "paypal"]),
  brand: import_zod10.z.string().optional(),
  // Optional, only for card type
  last4: import_zod10.z.string().optional(),
  // Optional, only for card or bank account type
  exp_month: import_zod10.z.number().optional(),
  // Optional, only for card type
  exp_year: import_zod10.z.number().optional()
  // Optional, only for card type
}).strict();

// src/dto/invoice-payment-intent.interface.ts
var import_zod11 = require("zod");
var invoicePaymentIntentSchema = import_zod11.z.object({
  invoiceId: import_zod11.z.string(),
  paymentMethodId: import_zod11.z.string().min(1, "Payment method ID is required")
}).strict();

// src/dto/automatic-charge.ts
var import_zod12 = require("zod");
var automaticChargeSchema = import_zod12.z.object({
  customerId: import_zod12.z.string(),
  collectionMethod: import_zod12.z.enum(["charge_automatically", "send_invoice"]),
  paymentMethodId: import_zod12.z.string().optional()
}).strict();

// src/dto/file.interface.ts
var import_zod13 = require("zod");
var fileSchema = import_zod13.z.object({
  name: import_zod13.z.string(),
  mimeType: import_zod13.z.string(),
  data: import_zod13.z.string().base64()
});

// src/dto/payment-proof.interface.ts
var import_zod14 = require("zod");
var paymentProofSchema = import_zod14.z.object({
  invoiceId: import_zod14.z.string(),
  file: fileSchema
});

// src/dto/invitation.ts
var import_zod18 = require("zod");

// src/enum/invitation-duration.enum.ts
var import_zod15 = __toESM(require("zod"));
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
var invitationDurationEnumSchema = import_zod15.default.enum([
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
var import_zod16 = require("zod");
var InvitationTypeEnum = /* @__PURE__ */ ((InvitationTypeEnum3) => {
  InvitationTypeEnum3["QR"] = "qr";
  InvitationTypeEnum3["PIN"] = "pin";
  return InvitationTypeEnum3;
})(InvitationTypeEnum || {});
var invitationTypeEnumSchema = import_zod16.z.enum([
  "qr" /* QR */,
  "pin" /* PIN */
]);

// src/dto/basic-user-info.ts
var import_zod17 = require("zod");
var BasicUserTypeEnum = /* @__PURE__ */ ((BasicUserTypeEnum3) => {
  BasicUserTypeEnum3["REGISTERED_USER"] = "registeredUser";
  BasicUserTypeEnum3["GUEST_USER"] = "guestUser";
  return BasicUserTypeEnum3;
})(BasicUserTypeEnum || {});
var basicUserTypeEnumSchema = import_zod17.z.enum(["registeredUser" /* REGISTERED_USER */, "guestUser" /* GUEST_USER */]);
var BasicUserInfoSchema = import_zod17.z.object({
  id: import_zod17.z.string().uuid(),
  username: import_zod17.z.string().min(1),
  name: import_zod17.z.string(),
  avatarUrl: import_zod17.z.string().url(),
  type: basicUserTypeEnumSchema
}).strict();

// src/dto/invitation.ts
var invitationSchema = import_zod18.z.object({
  _id: import_zod18.z.string().optional(),
  userId: import_zod18.z.string().optional(),
  userType: basicUserTypeEnumSchema.optional(),
  type: invitationTypeEnumSchema,
  duration: invitationDurationEnumSchema,
  isoDueDate: import_zod18.z.string(),
  used: import_zod18.z.boolean().optional(),
  oneTimeUse: import_zod18.z.boolean()
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
var import_zod19 = require("zod");
var guestSchema = import_zod19.z.object({
  _id: import_zod19.z.string().optional(),
  userSub: import_zod19.z.string().uuid(),
  name: import_zod19.z.string(),
  avatarUrl: import_zod19.z.string().url(),
  isoCreatedOn: import_zod19.z.string().datetime()
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
var import_zod20 = require("zod");
var projectUpdateSchema = import_zod20.z.object({
  updateText: import_zod20.z.string(),
  isoCreatedAt: import_zod20.z.string()
});
var projectSchema = import_zod20.z.object({
  _id: import_zod20.z.string().optional(),
  residentialId: import_zod20.z.string(),
  title: import_zod20.z.string(),
  description: import_zod20.z.string(),
  progress: import_zod20.z.number().min(0).max(1),
  isoCreatedAt: import_zod20.z.string(),
  updatedAt: import_zod20.z.string().optional(),
  lastUpdateText: import_zod20.z.string().optional(),
  isFinished: import_zod20.z.boolean(),
  isArchived: import_zod20.z.boolean().optional(),
  updates: import_zod20.z.array(projectUpdateSchema).optional()
});

// src/dto/action-log.ts
var import_zod21 = require("zod");
var actionLogSchema = import_zod21.z.object({
  residentialId: import_zod21.z.string().optional(),
  module: import_zod21.z.string(),
  httpMethod: import_zod21.z.string(),
  userId: import_zod21.z.string(),
  isoTimestamp: import_zod21.z.string().datetime({ offset: false }),
  details: import_zod21.z.string().optional()
});

// src/dto/notification.ts
var import_zod22 = require("zod");
var notificationSchema = import_zod22.z.object({
  _id: import_zod22.z.string().optional(),
  username: import_zod22.z.string().optional(),
  // Optional field to associate the notification with a user
  residentialId: import_zod22.z.string().optional(),
  // Optional field to associate the notification with a residential
  isGlobal: import_zod22.z.boolean().optional(),
  // Optional field to indicate if the notification is global
  title: import_zod22.z.string(),
  content: import_zod22.z.string().max(250, "Content must be at most 500 characters long"),
  url: import_zod22.z.string(),
  isoCreatedAt: import_zod22.z.string().datetime({ offset: false }),
  status: import_zod22.z.enum(["creating", "sending", "ok", "error"]).default("creating"),
  message: import_zod22.z.string()
  // field for additional message
}).strict();

// src/dto/notification-dto.ts
var import_zod23 = require("zod");
var notificationDtoSchema = import_zod23.z.object({
  id: import_zod23.z.string().optional(),
  title: import_zod23.z.string(),
  content: import_zod23.z.string().max(250, "Content must be at most 250 characters long"),
  url: import_zod23.z.string(),
  isoCreatedAt: import_zod23.z.string().datetime({ offset: false }),
  message: import_zod23.z.string(),
  // field for additional message
  read: import_zod23.z.boolean()
}).strict();

// src/dto/video-call-token.interface.ts
var import_zod24 = require("zod");
var videoCallTokenSchema = import_zod24.z.object({
  token: import_zod24.z.string(),
  roomName: import_zod24.z.string()
});

// src/dto/totem-call.ts
var import_zod25 = require("zod");
var totemCallStatusSchema = import_zod25.z.object({
  status: import_zod25.z.enum(["waiting", "rejected", "onCall", "ended"]),
  message: import_zod25.z.string(),
  isoCreatedAt: import_zod25.z.string().datetime({ offset: false })
}).strict();
var totemCallActionSchema = import_zod25.z.object({
  action: import_zod25.z.literal("doorOpen"),
  reason: import_zod25.z.enum(["resident", "publicServices", "thrashRecollection", "emergencyServices", "other"]),
  remoteGateId: import_zod25.z.string(),
  isoCreatedAt: import_zod25.z.string().datetime({ offset: false })
}).strict();
var totemCallSchema = import_zod25.z.object({
  _id: import_zod25.z.string().optional(),
  residentialId: import_zod25.z.string(),
  residentialName: import_zod25.z.string().optional(),
  status: import_zod25.z.enum(["waiting", "rejected", "onCall", "ended"]),
  isoCreatedAt: import_zod25.z.string().datetime({ offset: false }),
  attendedByUsername: import_zod25.z.string(),
  statusList: import_zod25.z.array(totemCallStatusSchema).optional(),
  actionList: import_zod25.z.array(totemCallActionSchema).optional()
}).strict();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map