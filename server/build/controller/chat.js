"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = __importDefault(require("socket.io"));
function default_1(_a) {
    var router = _a.router, http = _a.http, app = _a.app;
    var io = socket_io_1.default(http);
    var usersInfo = [];
    var chat = io
        .of('/chat')
        .on('connect', new Socket().chat);
}
exports.default = default_1;
var Socket = /** @class */ (function () {
    function Socket() {
    }
    // 连接成功
    Socket.prototype.chat = function (socket) {
        socket
            .on('login', function (data) {
        });
    };
    return Socket;
}());
