"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createEvent_message_json_1 = __importDefault(require("../messages/createEvent.message.json"));
const onlyAdmCreateEvent = () => {
    return {
        data: {},
        message: createEvent_message_json_1.default.onlyAdmCanEvent,
        statusCode: 400
    };
};
exports.default = onlyAdmCreateEvent;
