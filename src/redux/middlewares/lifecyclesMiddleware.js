// inspired by jayphelps
// https://github.com/redux-observable/redux-observable/issues/90#issuecomment-237416088
//
// lifecycles middleware will catch 'XXX_REQUEST' actions and transform it to promise
// then redispatch 'XXX_REQUEST' again to trigger reducer also
export default store => next => {
  const pending = {}

  return action => {
    let ret

    const [type = '', status = ''] = (action.type && action.type.split('/')) || []

    // first request action
    if (status === 'REQUEST' && !pending[type]) {
      ret = new Promise(resolve => {
        pending[type] = resolve
      })

      // redispatch request action again to trigger request action in reducer
      store.dispatch(action)
    } else {
      ret = next(action)
    }

    if (status !== 'REQUEST' && pending[type]) {
      // resolve
      pending[type](action)

      // clear the key
      delete pending[type]
    }

    return ret
  }
}
