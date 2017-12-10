import { Observable } from 'rxjs/Observable'

import { API_REQUEST_TIMEOUT } from '~/constants/common'
import parseError from '~/utils/parseError'

// server side AjaxObservable workaround
// https://github.com/ReactiveX/rxjs/issues/2099#issuecomment-258033058
if (typeof window === 'undefined') {
  global.XMLHttpRequest = typeof XMLHttpRequest !== 'undefined'
    ? XMLHttpRequest
    : require('xhr2')
}

const ajax$ = ({
  body,
  headers,
  method,
  timeout = API_REQUEST_TIMEOUT,
  url
}) => {
  url = (typeof window === 'undefined' ? API_HOST : '/api') + url

  return Observable.ajax({ body, headers, method, timeout, url })
    .map(({ response }) => response)
    .catch(error => Observable.of(parseError(error)))
}

export default {
  delete: url => ajax$({ method: 'delete', url }),
  get: url => ajax$({ method: 'get', url }),
  post: (url, body) => ajax$({ body, method: 'post', url }),
  put: (url, body) => ajax$({ body, method: 'put', url })
}
