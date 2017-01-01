import React from 'react'
import reducer from '../redux/modules';
import { Provider } from 'react-redux'
import { initStore } from '../redux/store'

export default function withRedux(ReduxComponent) {
  return class ReduxContainer extends React.Component {
    static getInitialProps ({ req }) {
      const isServer = !!req
      const store = initStore(reducer, undefined, isServer)
      return { initialState: store.getState(), isServer }
    }

    constructor (props) {
      super(props)
      this.store = initStore(reducer, props.initialState, props.isServer)
    }

    render () {
      return (
        <Provider store={this.store}>
          <ReduxComponent {...this.props} />
        </Provider>
      )
    }
  }
}
