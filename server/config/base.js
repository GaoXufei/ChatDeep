// 生产环境配置文件
module.exports = {
  // 应用配置
  app: {
    name: "chatdeep",
    port: 7002,
    apiPath: "/api"
  },

  // 是否开启debug
  debug: false,

  // mysql数据库配置文件
  // ...


  // jwt秘钥
  jwt: "chat",

  // 加密秘钥
  crypto: {
    secret: 'chat'
  },

  // 路由名称
  routerName: {
    me: "me", // 关于我
    login: "login", // 登录
    user: "user", // 用户
    chat: "chat" // 聊天
  }
}