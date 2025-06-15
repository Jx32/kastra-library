// src/index.ts
import { ObjectId as ObjectId4 } from "mongodb";

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
  iaBehaviour: z.enum(["formal", "friendly", "funny"]).optional()
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
  iaBehaviour: z2.enum(["formal", "friendly", "funny"]).optional()
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

// src/enum/role.enum.ts
var UserRoleEnum = /* @__PURE__ */ ((UserRoleEnum2) => {
  UserRoleEnum2["HOUSE_OWNER"] = "houseOwner";
  UserRoleEnum2["HOUSE_RELATED"] = "houseRelated";
  UserRoleEnum2["HELP_DESK"] = "helpDesk";
  UserRoleEnum2["ADMIN"] = "admin";
  return UserRoleEnum2;
})(UserRoleEnum || {});
export {
  MONGODB_ID_REGEX,
  ObjectId4 as ObjectId,
  PHONE_REGEX,
  UserRoleEnum,
  patchUserSchema,
  remoteGateLogSchema,
  remoteGateSchema,
  residentialSchema,
  userSchema,
  userSummarySchema
};
//# sourceMappingURL=index.mjs.map