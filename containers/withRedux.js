import React from 'react'
import reducer from '../redux/rootReducer';
import { Provider } from 'react-redux'
import { initStore } from '../redux/store'
import { END } from 'redux-saga';

// setup redux sagas
import rootSaga from '../redux/sagas';
import { sagaMiddleware } from '../redux/store';

export default function withRedux(ReduxComponent) {
  return class ReduxContainer extends React.Component {
    static getInitialProps ({ req }) {
      const isServer = !!req
      // TODO: populate initialState with localStorage if not on server.
      const store = initStore(reducer, undefined, isServer)
      sagaMiddleware.run(rootSaga);
      store.dispatch(END);
      return { initialState: store.getState(), isServer }
    }

    constructor (props) {
      super(props)
      this.store = initStore(reducer, props.initialState, props.isServer)
      sagaMiddleware.run(rootSaga);
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
