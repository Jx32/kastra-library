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
  MONGODB_ID_REGEX: () => MONGODB_ID_REGEX,
  PHONE_REGEX: () => PHONE_REGEX,
  UserRoleEnum: () => UserRoleEnum,
  patchUserSchema: () => patchUserSchema,
  remoteGateSchema: () => remoteGateSchema,
  remoteOpeningActionSchema: () => remoteOpeningActionSchema,
  residentialSchema: () => residentialSchema,
  userSchema: () => userSchema,
  userSummarySchema: () => userSummarySchema
});
module.exports = __toCommonJS(src_exports);

// src/constants/constants.ts
var PHONE_REGEX = /^(\+[1-9]{2})\d{10}$/;
var MONGODB_ID_REGEX = /^[a-f\d]{24}$/i;

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
  currentPinAccess: import_zod.z.string().length(4, "Current PIN must be 4 digits length").optional()
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
  currentPinAccess: import_zod2.z.string().length(4, "Current PIN must be 4 digits length").optional()
}).strict();

// src/dto/residential.interface.ts
var import_zod3 = __toESM(require("zod"));
var import_mongodb = require("mongodb");
var residentialSchema = import_zod3.default.object({
  _id: import_zod3.default.string().transform((val) => new import_mongodb.ObjectId(val)).optional(),
  name: import_zod3.default.string(),
  address: import_zod3.default.string(),
  city: import_zod3.default.string(),
  state: import_zod3.default.string(),
  country: import_zod3.default.string(),
  postalCode: import_zod3.default.string(),
  contactNumber: import_zod3.default.string().optional(),
  status: import_zod3.default.enum(["active", "inactive"]),
  topicName: import_zod3.default.string()
}).strict();

// src/dto/remote-opening-action.interface.ts
var import_zod4 = __toESM(require("zod"));
var import_mongodb2 = require("mongodb");
var remoteOpeningActionSchema = import_zod4.default.object({
  remoteDeviceId: import_zod4.default.string().transform((val) => new import_mongodb2.ObjectId(val)).optional(),
  action: import_zod4.default.enum(["open", "close"]),
  timestamp: import_zod4.default.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid timestamp format, must be ISO 8601"
  }),
  userSub: import_zod4.default.string().uuid(),
  reason: import_zod4.default.string().optional(),
  additionalInfo: import_zod4.default.any().optional()
}).strict();

// src/dto/remote-gate.interface.ts
var import_zod5 = require("zod");
var import_mongodb3 = require("mongodb");
var remoteGateSchema = import_zod5.z.object({
  _id: import_zod5.z.string().transform((val) => new import_mongodb3.ObjectId(val)).optional(),
  residentialId: import_zod5.z.string().transform((val) => new import_mongodb3.ObjectId(val)),
  name: import_zod5.z.string(),
  type: import_zod5.z.enum(["entrance", "exit"])
}).strict();

// src/dto/user-summary.interface.ts
var import_zod6 = __toESM(require("zod"));
var userSummarySchema = import_zod6.default.object({
  remoteGates: import_zod6.default.array(remoteGateSchema),
  currentPinAccess: import_zod6.default.string().length(4, "Current PIN must be 4 digits length"),
  topicName: import_zod6.default.string().min(1, "Topic name cannot be empty")
}).strict();

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
  MONGODB_ID_REGEX,
  PHONE_REGEX,
  UserRoleEnum,
  patchUserSchema,
  remoteGateSchema,
  remoteOpeningActionSchema,
  residentialSchema,
  userSchema,
  userSummarySchema
});
//# sourceMappingURL=index.js.map