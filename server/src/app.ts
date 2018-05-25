// 引入库
import Koa from 'koa'

import socketIo from 'socket.io'

// 实例化
const app = new Koa();

var http = require('http').Server(app.callback());

// 引入配置文件
const config = require('../config')

// 引入后端路由
import routing from "./router"
routing(http, app)



http.listen(config.app.port , () => {
  console.log('\u001b[46;37m ------* Service listen port is '+ config.app.port +' *------ \u001b[0m')
})