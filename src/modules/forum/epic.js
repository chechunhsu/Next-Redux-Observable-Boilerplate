import api from './api'
import epic$ from '~/redux/observable/epic$'
import { LIST_FORUM } from '~/constants/actionTypes'
import {
  listForumSuccess,
  listForumFailure
} from './action'

export default action$ => epic$.exhaustAsync({
  action$,
  api: api.listForum,
  failureAction: listForumFailure,
  successAction: listForumSuccess,
  requestType: LIST_FORUM.REQUEST
})
