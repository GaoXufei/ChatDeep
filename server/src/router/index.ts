import Router from 'koa-router'
import Controller from '../controller'
const router = new Router()


export default function(http: any, app: any){
  Controller(router, http, app)
  app.use(router.routes(), router.allowedMethods());
}