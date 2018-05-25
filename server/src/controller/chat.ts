import socketIo from 'socket.io'
interface CtxInterface {
  router: object,
  http: object,
  app: object
}
export default function({ router, http, app }: CtxInterface){
  const io = socketIo(http)
  const usersInfo = []

  const chat = io
    .of('/chat')
    .on('connect', new Socket().chat)
    

}

interface loginData {
  name: string
}
class Socket {
  // 连接成功
  chat(socket: any){
    socket
      .on('login', (data: loginData) => {
        
      })
    
  }
}


