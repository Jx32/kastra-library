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
  houseOwnerSub: z.string().uuid().optional()
}).strict();

// src/dto/patch-user.interface.ts
import { z as z2 } from "zod";
var patchUserSchema = z2.object({
  name: z2.string().optional(),
  email: z2.string().email().optional(),
  phone_number: z2.string().regex(PHONE_REGEX).optional(),
  firstLogin: z2.boolean().optional(),
  houseNumber: z2.string().optional(),
  street: z2.string().optional()
}).strict();

// src/dto/residential.interface.ts
import z3 from "zod";
var residentialSchema = z3.object({
  _id: z3.string().regex(MONGODB_ID_REGEX, "Invalid ID format, must be a valid hex value").optional(),
  name: z3.string(),
  address: z3.string(),
  city: z3.string(),
  state: z3.string(),
  country: z3.string(),
  postalCode: z3.string(),
  contactNumber: z3.string().optional(),
  status: z3.enum(["active", "inactive"])
}).strict();

// src/dto/remote-opening-action.interface.ts
import z4 from "zod";
var remoteOpeningActionSchema = z4.object({
  remoteDeviceId: z4.string().regex(MONGODB_ID_REGEX, "Invalid remote device ID format, must be a valid hex value").optional(),
  action: z4.enum(["open", "close"]),
  timestamp: z4.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: z4.string().uuid(),
  reason: z4.string().optional(),
  additionalInfo: z4.any().optional()
}).strict();

// src/dto/remote-device.interface.ts
import { z as z5 } from "zod";
var remoteDeviceSchema = z5.object({
  _id: z5.string().regex(MONGODB_ID_REGEX, "Invalid ID format, must be a valid hex value").optional(),
  residentialId: z5.string().regex(MONGODB_ID_REGEX, "Invalid residential ID format, must be a valid hex value"),
  name: z5.string(),
  type: z5.enum(["entranceGate", "exitGate"])
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
  PHONE_REGEX,
  UserRoleEnum,
  patchUserSchema,
  remoteDeviceSchema,
  remoteOpeningActionSchema,
  residentialSchema,
  userSchema
};
//# sourceMappingURL=index.mjs.map