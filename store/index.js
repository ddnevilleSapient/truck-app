import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createNewStore(defaultStore = {}) {
  return createStore(
    rootReducer,
    defaultStore,
    enhancers(
      applyMiddleware(thunk)
    )
  );
}
