export default function(router: any){
  router.get('/login', async (ctx: any, next: any) => {
    ctx.body = 'login'
    ctx.status = 200
  })
}