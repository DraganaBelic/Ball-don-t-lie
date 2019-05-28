// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../src/reducers/index';
import createSagaMiddleware from 'redux-saga'
import { sagas } from './sagas/index';
// import { connectRouter, routerMiddleware } from 'connected-react-router'
// import createHistory from 'history/createBrowserHistory'


// // let initialStore = {};
// // add the middlewares
// let middlewares = [];
// const history = createHistory()
// // add the router middleware
// middlewares.push(routerMiddleware(history));

// // // add the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// middlewares.push(sagaMiddleware);

// const middleware = applyMiddleware(...middlewares)

// // const store = createStore(rootReducer, middleware);
// // const history = syncHistoryWithStore(browserHistory, store)

// const store = createStore(connectRouter(history)(rootReducer), middleware)

// sagaMiddleware.run(sagas)

// export {store, history};


import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      ),
    ),
  )
  sagaMiddleware.run(sagas)

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }
  return store
}

