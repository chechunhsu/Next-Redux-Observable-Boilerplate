import { connect } from 'react-redux'

import { listForum } from '../action'
import Component from '../components/Forum'

export default connect(state => state.forum, { listForum })(Component)
