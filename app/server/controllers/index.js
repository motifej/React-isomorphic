import Router from 'koa-router'
import configureAuntificate from './Auntificate'

export { default as configureRenderApp } from './RenderApp'

export function configurePublic() {
  const publicRouter = Router({
    prefix: '/api'
  })
  publicRouter.use(configureAuntificate())
  return publicRouter.routes()
}

export function configureCors() {
 return (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin', ctx.get('Origin'))
    ctx.response.set('Access-Control-Allow-Methods', 'GET, HEAD, PUT, POST, DELETE, PATCH')
    ctx.response.set('Access-Control-Allow-Headers', 'Authorization, Content-Type')
    if (ctx.method === 'OPTIONS') {
        ctx.response.status = 204
    }
    return next()
 }
}
