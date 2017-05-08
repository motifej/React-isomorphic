import Router from 'koa-router'

const signUp = ctx => {
  const { password='' } = ctx.request.body
  if (password.length < 6) {
    ctx.status = 400
    ctx.body = {
        error: 'Passw less than 6',
    }
  } else {
    const user = { ...ctx.request.body }
    user.password = '*******'
    delete user.confPassword
    ctx.body = user
  }
}

const setUserInfo = ctx => {
  const { category, victim } = ctx.request.body
  ctx.body = {
    category,
    victim,
  }
}

export default function configureNotify() {
  const router = Router()
  router.post('/signup', signUp)
  router.put('/setinfo', setUserInfo)
  return router.routes()
}