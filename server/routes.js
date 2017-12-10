const routes = module.exports = require('next-routes')()

routes
  .add('card', 'card')
  .add('channel', 'channel')
  .add('forum', ['/', '/forum/:alias'])
  .add('notification', 'notification')
  .add('user', 'user')
