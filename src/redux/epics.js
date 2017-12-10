import { combineEpics } from 'redux-observable'

import { epic as forum } from '~/modules/forum'

export default combineEpics(
  forum
)
