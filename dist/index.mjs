// src/dto/user.interface.ts
import { z } from "zod";
var userSchema = z.object({
  sub: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  email_verified: z.boolean(),
  phone_number: z.string().optional(),
  phone_number_verified: z.boolean().optional(),
  firstLogin: z.boolean(),
  houseNumber: z.string(),
  role: z.enum(["houseOwner", "houseRelated", "helpDesk", "admin"]),
  street: z.string()
}).strict();

// src/dto/patch-user.interface.ts
import { z as z2 } from "zod";
var patchUserSchema = z2.object({
  name: z2.string().optional(),
  email: z2.string().email().optional(),
  phone_number: z2.string().optional(),
  firstLogin: z2.boolean().optional(),
  houseNumber: z2.string().optional(),
  street: z2.string().optional()
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
  UserRoleEnum,
  userSchema
};
//# sourceMappingURL=index.mjs.map