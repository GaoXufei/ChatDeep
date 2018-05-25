"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 引入库
var koa_1 = __importDefault(require("koa"));
// 实例化
var app = new koa_1.default();
var http = require('http').Server(app.callback());
// 引入配置文件
var config = require('../config');
// 引入后端路由
var router_1 = __importDefault(require("./router"));
router_1.default(http, app);
http.listen(config.app.port, function () {
    console.log('\u001b[46;37m ------* Service listen port is ' + config.app.port + ' *------ \u001b[0m');
});
