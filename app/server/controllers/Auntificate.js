import Router from 'koa-router'

const singUp = ctx => {
  const { email='', passw='' } = ctx.request.body
  if (passw.length < 6) {
    ctx.status = 400
    ctx.body = {
        error: 'Passw less than 6',
    }
  } else {
    ctx.body = {
        email,
    }
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
  router.post('/singup', singUp)
  router.put('/setinfo', setUserInfo)
  return router.routes()
}