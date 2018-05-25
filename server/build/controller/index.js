"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = __importDefault(require("./login"));
var chat_1 = __importDefault(require("./chat"));
function default_1(router, http, app) {
    login_1.default(router);
    chat_1.default({ router: router, http: http, app: app });
}
exports.default = default_1;
