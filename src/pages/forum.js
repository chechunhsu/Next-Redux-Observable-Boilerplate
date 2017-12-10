import { Forum } from '~/modules/forum'
import MainLayout from './layouts/MainLayout'

import { listForum } from '~/modules/forum/action'

@MainLayout
export default class extends React.Component {
  static getInitialProps = async ({ isServer, store }) => {
    const whenListForum = store.dispatch(listForum())

    if (isServer) await whenListForum
  }

  render = () => (
    <section>
      <h2>談話室</h2>
      <Forum/>
    </section>
  )
}
