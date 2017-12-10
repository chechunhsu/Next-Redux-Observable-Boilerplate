import Koa from 'koa'
import next from 'next'
import Router from 'koa-router'
import serve from 'koa-static'

import api from './api'
import config from '../config'
import routes from './routes'

const app = next({
  dev: DEV,
  dir: './src'
})
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.use(serve('./static'))

  router.use('/api', api)

  router.get('*', async ctx => {
    await handler(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())

  server.listen(config.app.port, config.app.host, error => {
    if (error) throw error
    console.log(`> Ready on ${config.app.host}:${config.app.port}`)
  })
})
