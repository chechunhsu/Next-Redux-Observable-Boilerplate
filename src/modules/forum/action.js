import { LIST_FORUM } from '~/constants/actionTypes'

export const listForum = () => ({
  type: LIST_FORUM.REQUEST
})
export const listForumSuccess = response => ({
  type: LIST_FORUM.SUCCESS,
  payload: response
})
export const listForumFailure = error => ({
  type: LIST_FORUM.FAILURE,
  payload: error
})
