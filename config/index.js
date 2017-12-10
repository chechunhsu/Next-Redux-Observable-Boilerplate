import merge from 'lodash/merge'

const config = {
  api: {
    host: process.env.API_HOST || 'http://localhost:3000'
  },
  app: {
    host: process.env.SERVER_HOST || '0.0.0.0',
    port: +process.env.SERVER_PORT || 3010
  },
  locale: process.env.LOCALE || 'ja'
}

const env = process.env.NODE_ENV || 'development'

try {
  merge(config, require('./' + env))
} catch (err) {
  console.log('Failed to load config:', env)
}

export default config
