// expose partial configs to global
import config from './'

global.API_HOST = config.api.host
global.DEV = process.env.NODE_ENV !== 'production'
