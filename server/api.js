import Request from 'request-promise-native'
import Router from 'koa-router'

import parseError from './utils/parseError'

const requestAPI = Request.defaults({ baseUrl: API_HOST })

const router = new Router()

router.use(async ctx => {
  const endpoint = ctx.originalUrl.match(new RegExp(ctx.matched[0].regexp))[1]

  try {
    const response = await requestAPI(endpoint)
    ctx.body = response
  } catch (err) {
    ctx.body = parseError(err)
  }
})

export default router.routes()
