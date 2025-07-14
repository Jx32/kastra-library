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
  automaticChargeSchema: () => automaticChargeSchema,
  basicUserTypeEnumSchema: () => basicUserTypeEnumSchema,
  guestSchema: () => guestSchema,
  invitationDurationEnumSchema: () => invitationDurationEnumSchema,
  invitationSchema: () => invitationSchema,
  invitationSchemaToInterface: () => invitationSchemaToInterface,
  invitationTypeEnumSchema: () => invitationTypeEnumSchema,
  invoicePaymentIntentSchema: () => invoicePaymentIntentSchema,
  invoiceSchema: () => invoiceSchema,
  patchUserSchema: () => patchUserSchema,
  paymentMethodSchema: () => paymentMethodSchema,
  remoteGateLogSchema: () => remoteGateLogSchema,
  remoteGateSchema: () => remoteGateSchema,
  residentialSchema: () => residentialSchema,
  userSchema: () => userSchema,
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
  role: import_zod.z.enum(["houseOwner", "houseRelated", "helpDesk", "admin"]),
  street: import_zod.z.string(),
  residentialId: import_zod.z.string(),
  houseOwnerSub: import_zod.z.string().uuid().optional(),
  currentPinAccess: import_zod.z.string().length(4, "Current PIN must be 4 digits length").optional(),
  stripeCustomerId: import_zod.z.string().optional(),
  // Optional field for Stripe customer ID
  iaBehaviour: import_zod.z.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: import_zod.z.string().optional()
  // Optional field for avatar URL
}).strict();

// src/dto/patch-user.interface.ts
var import_zod2 = require("zod");
var patchUserSchema = import_zod2.z.object({
  name: import_zod2.z.string().optional(),
  email: import_zod2.z.string().email().optional(),
  phone_number: import_zod2.z.string().regex(PHONE_REGEX).optional(),
  firstLogin: import_zod2.z.boolean().optional(),
  houseNumber: import_zod2.z.string().optional(),
  street: import_zod2.z.string().optional(),
  currentPinAccess: import_zod2.z.string().length(4, "Current PIN must be 4 digits length").optional(),
  iaBehaviour: import_zod2.z.enum(["formal", "friendly", "funny"]).optional(),
  avatarUrl: import_zod2.z.string().optional()
  // Optional field for avatar URL
}).strict();

// src/dto/residential.interface.ts
var import_zod3 = __toESM(require("zod"));
var residentialSchema = import_zod3.default.object({
  _id: import_zod3.default.string().optional(),
  name: import_zod3.default.string(),
  address: import_zod3.default.string(),
  city: import_zod3.default.string(),
  state: import_zod3.default.string(),
  country: import_zod3.default.string(),
  postalCode: import_zod3.default.string(),
  contactNumber: import_zod3.default.string().optional(),
  status: import_zod3.default.enum(["active", "inactive"]),
  topicName: import_zod3.default.string(),
  monthlyPaymentStripePriceId: import_zod3.default.string().optional(),
  monthlyPaymentAmount: import_zod3.default.string()
}).strict();

// src/dto/remote-gate-log.interface.ts
var import_zod4 = __toESM(require("zod"));
var remoteGateLogSchema = import_zod4.default.object({
  remoteGateId: import_zod4.default.string().optional(),
  source: import_zod4.default.enum(["app", "totem"]),
  action: import_zod4.default.enum(["open", "enable", "disable", "create", "delete", "update"]),
  timestamp: import_zod4.default.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: import_zod4.default.string().uuid(),
  reason: import_zod4.default.string().optional(),
  additionalInfo: import_zod4.default.any().optional()
}).strict();

// src/dto/remote-gate.interface.ts
var import_zod5 = require("zod");
var remoteGateSchema = import_zod5.z.object({
  _id: import_zod5.z.string().optional(),
  residentialId: import_zod5.z.string(),
  name: import_zod5.z.string(),
  type: import_zod5.z.enum(["entrance", "exit"]),
  thingName: import_zod5.z.string(),
  enabled: import_zod5.z.boolean().optional()
  // Optional field to indicate if the gate is enabled
}).strict();

// src/dto/user-summary.interface.ts
var import_zod6 = __toESM(require("zod"));
var userSummarySchema = import_zod6.default.object({
  remoteGates: import_zod6.default.array(remoteGateSchema),
  currentPinAccess: import_zod6.default.string().length(4, "Current PIN must be 4 digits length"),
  topicName: import_zod6.default.string().min(1, "Topic name cannot be empty")
}).strict();

// src/dto/invoice.interface.ts
var import_zod7 = require("zod");
var invoiceSchema = import_zod7.z.object({
  id: import_zod7.z.string(),
  status: import_zod7.z.enum(["draft", "open", "paid", "uncollectible", "void"]),
  created: import_zod7.z.number(),
  total: import_zod7.z.number(),
  ammount_remaining: import_zod7.z.number(),
  customerId: import_zod7.z.string(),
  description: import_zod7.z.string(),
  invoice_pdf: import_zod7.z.string().url().optional(),
  collection_method: import_zod7.z.enum(["charge_automatically", "send_invoice"]),
  due_date: import_zod7.z.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  days_until_due: import_zod7.z.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  monthName: import_zod7.z.string(),
  year: import_zod7.z.number().min(2e3).max(2100),
  // Year must be a valid year
  paid_amount: import_zod7.z.number().optional()
  // Optional, amount paid by the customer
}).strict();

// src/dto/payment-method.interface.ts
var import_zod8 = require("zod");
var paymentMethodSchema = import_zod8.z.object({
  id: import_zod8.z.string(),
  type: import_zod8.z.enum(["card", "bank_account", "paypal"]),
  brand: import_zod8.z.string().optional(),
  // Optional, only for card type
  last4: import_zod8.z.string().optional(),
  // Optional, only for card or bank account type
  exp_month: import_zod8.z.number().optional(),
  // Optional, only for card type
  exp_year: import_zod8.z.number().optional()
  // Optional, only for card type
}).strict();

// src/dto/invoice-payment-intent.interface.ts
var import_zod9 = require("zod");
var invoicePaymentIntentSchema = import_zod9.z.object({
  invoiceId: import_zod9.z.string(),
  paymentMethodId: import_zod9.z.string().min(1, "Payment method ID is required")
}).strict();

// src/dto/video-call-token.interface.ts
var import_zod10 = require("zod");
var videoCallTokenSchema = import_zod10.z.object({
  token: import_zod10.z.string(),
  roomName: import_zod10.z.string()
});

// src/dto/automatic-charge.ts
var import_zod11 = require("zod");
var automaticChargeSchema = import_zod11.z.object({
  customerId: import_zod11.z.string(),
  collectionMethod: import_zod11.z.enum(["charge_automatically", "send_invoice"]),
  paymentMethodId: import_zod11.z.string().optional()
}).strict();

// src/dto/invitation.ts
var import_zod15 = require("zod");

// src/enum/invitation-duration.enum.ts
var import_zod12 = __toESM(require("zod"));
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
var invitationDurationEnumSchema = import_zod12.default.enum([
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
var import_zod13 = require("zod");
var InvitationTypeEnum = /* @__PURE__ */ ((InvitationTypeEnum3) => {
  InvitationTypeEnum3["QR"] = "qr";
  InvitationTypeEnum3["PIN"] = "pin";
  return InvitationTypeEnum3;
})(InvitationTypeEnum || {});
var invitationTypeEnumSchema = import_zod13.z.enum([
  "qr" /* QR */,
  "pin" /* PIN */
]);

// src/dto/basic-user-info.ts
var import_zod14 = require("zod");
var BasicUserTypeEnum = /* @__PURE__ */ ((BasicUserTypeEnum3) => {
  BasicUserTypeEnum3["REGISTERED_USER"] = "registeredUser";
  BasicUserTypeEnum3["GUEST_USER"] = "guestUser";
  return BasicUserTypeEnum3;
})(BasicUserTypeEnum || {});
var basicUserTypeEnumSchema = import_zod14.z.enum(["registeredUser" /* REGISTERED_USER */, "guestUser" /* GUEST_USER */]);
var BasicUserInfoSchema = import_zod14.z.object({
  id: import_zod14.z.string().uuid(),
  name: import_zod14.z.string(),
  avatarUrl: import_zod14.z.string().url(),
  type: basicUserTypeEnumSchema
}).strict();

// src/dto/invitation.ts
var invitationSchema = import_zod15.z.object({
  _id: import_zod15.z.string().optional(),
  userId: import_zod15.z.string().optional(),
  userType: basicUserTypeEnumSchema.optional(),
  type: invitationTypeEnumSchema,
  duration: invitationDurationEnumSchema,
  isoDueDate: import_zod15.z.string(),
  used: import_zod15.z.boolean().optional(),
  oneTimeUse: import_zod15.z.boolean()
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
var import_zod16 = require("zod");
var guestSchema = import_zod16.z.object({
  _id: import_zod16.z.string().optional(),
  userSub: import_zod16.z.string().uuid(),
  name: import_zod16.z.string(),
  avatarUrl: import_zod16.z.string().url(),
  isoCreatedOn: import_zod16.z.string().datetime()
});

// src/enum/role.enum.ts
var UserRoleEnum = /* @__PURE__ */ ((UserRoleEnum2) => {
  UserRoleEnum2["HOUSE_OWNER"] = "houseOwner";
  UserRoleEnum2["HOUSE_RELATED"] = "houseRelated";
  UserRoleEnum2["HELP_DESK"] = "helpDesk";
  UserRoleEnum2["ADMIN"] = "admin";
  return UserRoleEnum2;
})(UserRoleEnum || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  remoteGateLogSchema,
  remoteGateSchema,
  residentialSchema,
  userSchema,
  userSummarySchema,
  videoCallTokenSchema
});
//# sourceMappingURL=index.js.map