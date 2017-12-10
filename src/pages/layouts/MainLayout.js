import reduxPage from '~/redux'

import Header from '../components/Header'

export default WrappedComponent => {
  class Layout extends React.Component {
    render = () => (
      <React.Fragment>
        <Header/>
        <WrappedComponent {...this.props}/>
      </React.Fragment>
    )
  }

  Layout.getInitialProps = WrappedComponent.getInitialProps
  return reduxPage(Layout)
}
