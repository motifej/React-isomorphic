import Koa from 'koa'
import BodyParser from 'koa-bodyparser'
import cluster from 'cluster'
import os from 'os'
import winstonKoaLogger from 'koa-logger-winston'
import logger from 'winston'
import { configurePublic, configureCors } from './controllers'

if (cluster.isMaster) {
  const numCpus = os.cpus().length
  for( let i = 0; i < numCpus; i++ ) {
    cluster.fork()
  }
  cluster.on('exit', () => {
    console.log('[WARN] Worker %d died with code/signal %s. Restarting worker...')//eslint-disable-line no-console
    cluster.fork()
  })
} else {
  const app = new Koa
  app.use(winstonKoaLogger(logger))

  app.use(BodyParser())
  app.use(configureCors())

  app.use(configurePublic())

  app.use(ctx => {
    ctx.response.status = 404
    ctx.response.body = {
      status: false,
      code: 404,
      msg: 'Not found'
    }
  })

  app.listen(process.env.PORT || 3000)
}