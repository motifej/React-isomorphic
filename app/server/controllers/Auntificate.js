import Router from 'koa-router'

const signUp = ctx => {
    const user = { ...ctx.request.body }
    user.password = '*******'
    delete user.confPassword
    ctx.body = user
}

export default function configureNotify() {
  const router = Router()
  router.post('/signup', signUp)
  return router.routes()
}