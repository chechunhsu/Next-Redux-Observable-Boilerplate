import { LIST_FORUM } from '~/constants/actionTypes'

export default (state = {
  data: {},
  error: null,
  isFetching: false
}, { type, payload }) => {
  switch (type) {
    case LIST_FORUM.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case LIST_FORUM.SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false
      }
    case LIST_FORUM.FAILURE:
      return {
        ...state,
        error: payload,
        isFetching: false
      }
    default:
      return state
  }
}
