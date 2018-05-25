import login from './login'
import chat  from './chat'

export default function(router: any, http: any, app: any){
  login(router)
  chat({router, http, app})
}