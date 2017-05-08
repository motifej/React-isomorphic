import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const middleware = [];
  if(typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
  }
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
