"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var controller_1 = __importDefault(require("../controller"));
var router = new koa_router_1.default();
function default_1(http, app) {
    controller_1.default(router, http, app);
    app.use(router.routes(), router.allowedMethods());
}
exports.default = default_1;
