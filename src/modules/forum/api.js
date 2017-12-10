import api$ from '~/redux/observable/api$'

export default {
  listForum: () => api$.get('/v2/forums')
}
