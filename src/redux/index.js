import withRedux from 'next-redux-wrapper'

import './rxjs'

import initStore from './store'
import reducers from './reducers'

const createStore = initialState => initStore(reducers, initialState)

export default withRedux(createStore)
