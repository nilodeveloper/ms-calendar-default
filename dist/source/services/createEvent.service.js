"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const repository = __importStar(require("../repository/createEvent.repository"));
const onlyAdmCreate_business_1 = require("../business/event/onlyAdmCreate.business");
const onlyOneEventPerTime_business_1 = require("../business/event/onlyOneEventPerTime.business");
const createEvent_success_1 = __importDefault(require("../responses/createEvent.success"));
function run(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield validate(event);
            const event_ = yield repository.createEvent(event);
            return (0, createEvent_success_1.default)(event);
        }
        catch (e) {
            return {
                data: e.data || {},
                message: e.message || "Houve um problema no servidor. Entre em contato com o administrador",
                statusCode: e.statusCode || 500
            };
        }
    });
}
exports.run = run;
const validate = (event) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, onlyAdmCreate_business_1.onlyAdmCreate)(event);
    yield (0, onlyOneEventPerTime_business_1.onlyOneEventPerTime)(event);
});
