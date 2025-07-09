// src/index.ts
import { ObjectId as ObjectId5 } from "mongodb";

// src/constants/constants.ts
var PHONE_REGEX = /^(\+[1-9]{2})\d{10}$/;
var MONGODB_ID_REGEX = /^[a-f\d]{24}$/i;

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

// src/dto/residential.interface.ts
import z3 from "zod";
import { ObjectId } from "mongodb";
var residentialSchema = z3.object({
  _id: z3.string().transform((val) => new ObjectId(val)).optional(),
  name: z3.string(),
  address: z3.string(),
  city: z3.string(),
  state: z3.string(),
  country: z3.string(),
  postalCode: z3.string(),
  contactNumber: z3.string().optional(),
  status: z3.enum(["active", "inactive"]),
  topicName: z3.string(),
  monthlyPaymentStripePriceId: z3.string().optional(),
  monthlyPaymentAmount: z3.string()
}).strict();

// src/dto/remote-gate-log.interface.ts
import z4 from "zod";
import { ObjectId as ObjectId2 } from "mongodb";
var remoteGateLogSchema = z4.object({
  remoteGateId: z4.string().transform((val) => new ObjectId2(val)).optional(),
  source: z4.enum(["app", "totem"]),
  action: z4.enum(["open", "enable", "disable", "create", "delete", "update"]),
  timestamp: z4.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: z4.string().uuid(),
  reason: z4.string().optional(),
  additionalInfo: z4.any().optional()
}).strict();

// src/dto/remote-gate.interface.ts
import { z as z5 } from "zod";
import { ObjectId as ObjectId3 } from "mongodb";
var remoteGateSchema = z5.object({
  _id: z5.string().transform((val) => new ObjectId3(val)).optional(),
  residentialId: z5.string().transform((val) => new ObjectId3(val)),
  name: z5.string(),
  type: z5.enum(["entrance", "exit"]),
  thingName: z5.string(),
  enabled: z5.boolean().optional()
  // Optional field to indicate if the gate is enabled
}).strict();

// src/dto/user-summary.interface.ts
import z6 from "zod";
var userSummarySchema = z6.object({
  remoteGates: z6.array(remoteGateSchema),
  currentPinAccess: z6.string().length(4, "Current PIN must be 4 digits length"),
  topicName: z6.string().min(1, "Topic name cannot be empty")
}).strict();

// src/dto/invoice.interface.ts
import { z as z7 } from "zod";
var invoiceSchema = z7.object({
  id: z7.string(),
  status: z7.enum(["draft", "open", "paid", "uncollectible", "void"]),
  created: z7.number(),
  total: z7.number(),
  ammount_remaining: z7.number(),
  customerId: z7.string(),
  description: z7.string(),
  invoice_pdf: z7.string().url().optional(),
  collection_method: z7.enum(["charge_automatically", "send_invoice"]),
  due_date: z7.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  days_until_due: z7.number().optional(),
  // Optional, only if collection_method is "send_invoice"
  monthName: z7.string(),
  year: z7.number().min(2e3).max(2100),
  // Year must be a valid year
  paid_amount: z7.number().optional()
  // Optional, amount paid by the customer
}).strict();

// src/dto/payment-method.interface.ts
import { z as z8 } from "zod";
var paymentMethodSchema = z8.object({
  id: z8.string(),
  type: z8.enum(["card", "bank_account", "paypal"]),
  brand: z8.string().optional(),
  // Optional, only for card type
  last4: z8.string().optional(),
  // Optional, only for card or bank account type
  exp_month: z8.number().optional(),
  // Optional, only for card type
  exp_year: z8.number().optional()
  // Optional, only for card type
}).strict();

// src/dto/invoice-payment-intent.interface.ts
import { z as z9 } from "zod";
var invoicePaymentIntentSchema = z9.object({
  invoiceId: z9.string(),
  paymentMethodId: z9.string().min(1, "Payment method ID is required")
}).strict();

// src/dto/video-call-token.interface.ts
import { z as z10 } from "zod";
var videoCallTokenSchema = z10.object({
  token: z10.string(),
  roomName: z10.string()
});

// src/dto/automatic-charge.ts
import { z as z11 } from "zod";
var automaticChargeSchema = z11.object({
  customerId: z11.string(),
  collectionMethod: z11.enum(["charge_automatically", "send_invoice"]),
  paymentMethodId: z11.string().optional()
}).strict();

// src/enum/invitation-duration.enum.ts
var InvitationDurationEnum = /* @__PURE__ */ ((InvitationDurationEnum2) => {
  InvitationDurationEnum2["ONE_HOUR"] = "1 hour";
  InvitationDurationEnum2["TWO_HOURS"] = "2 hours";
  InvitationDurationEnum2["FOUR_HOURS"] = "4 hours";
  InvitationDurationEnum2["SIX_HOURS"] = "6 hours";
  InvitationDurationEnum2["TWELVE_HOURS"] = "12 hours";
  InvitationDurationEnum2["ONE_DAY"] = "1 day";
  InvitationDurationEnum2["TWO_DAYS"] = "2 days";
  InvitationDurationEnum2["THREE_DAYS"] = "3 days";
  InvitationDurationEnum2["ONE_WEEK"] = "1 week";
  InvitationDurationEnum2["TWO_WEEKS"] = "2 weeks";
  InvitationDurationEnum2["ONE_MONTH"] = "1 month";
  InvitationDurationEnum2["THREE_MONTHS"] = "3 months";
  return InvitationDurationEnum2;
})(InvitationDurationEnum || {});

// src/enum/invitation-type.enum.ts
var InvitationTypeEnum = /* @__PURE__ */ ((InvitationTypeEnum2) => {
  InvitationTypeEnum2["QR"] = "qr";
  InvitationTypeEnum2["PIN"] = "pin";
  return InvitationTypeEnum2;
})(InvitationTypeEnum || {});

// src/dto/basic-user-info.ts
import { z as z12 } from "zod";
var BasicUserTypeEnum = /* @__PURE__ */ ((BasicUserTypeEnum2) => {
  BasicUserTypeEnum2["REGISTERED_USER"] = "registeredUser";
  BasicUserTypeEnum2["GUEST_USER"] = "guestUser";
  return BasicUserTypeEnum2;
})(BasicUserTypeEnum || {});
var basicUserTypeEnumSchema = z12.enum(["registeredUser", "guestUser"]);
var BasicUserInfoSchema = z12.object({
  id: z12.string().uuid(),
  name: z12.string(),
  avatarUrl: z12.string().url(),
  type: basicUserTypeEnumSchema
}).strict();

// src/dto/guest.ts
import { ObjectId as ObjectId4 } from "mongodb";
import { z as z13 } from "zod";
var guestSchema = z13.object({
  _id: z13.string().transform((val) => new ObjectId4(val)).optional(),
  name: z13.string(),
  avatarUrl: z13.string().url(),
  isoCreatedOn: z13.string().datetime()
});

// src/enum/role.enum.ts
var UserRoleEnum = /* @__PURE__ */ ((UserRoleEnum2) => {
  UserRoleEnum2["HOUSE_OWNER"] = "houseOwner";
  UserRoleEnum2["HOUSE_RELATED"] = "houseRelated";
  UserRoleEnum2["HELP_DESK"] = "helpDesk";
  UserRoleEnum2["ADMIN"] = "admin";
  return UserRoleEnum2;
})(UserRoleEnum || {});

// src/util/util-module.ts
var UtilModule = class {
  static generateFallbackAvatarUrl(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=64&bold=false`;
  }
};
export {
  BasicUserInfoSchema,
  BasicUserTypeEnum,
  InvitationDurationEnum,
  InvitationTypeEnum,
  MONGODB_ID_REGEX,
  ObjectId5 as ObjectId,
  PHONE_REGEX,
  UserRoleEnum,
  UtilModule,
  automaticChargeSchema,
  basicUserTypeEnumSchema,
  guestSchema,
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
};
//# sourceMappingURL=index.mjs.map