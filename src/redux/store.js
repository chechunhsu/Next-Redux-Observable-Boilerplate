import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createEpicMiddleware } from 'redux-observable'
import lifecyclesMiddleware from './middlewares/lifecyclesMiddleware'

import epics from './epics'

let store = null

export default (reducer, initialState = {}) => {
  if (!store) {
    const epicMiddleware = createEpicMiddleware(epics)
    const enhancers = composeWithDevTools(applyMiddleware(epicMiddleware, lifecyclesMiddleware))

    store = createStore(reducer, initialState, enhancers)
  }

  return store
}
