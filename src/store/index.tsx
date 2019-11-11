import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducers';
import { combineReducers } from 'redux';
import { libraryReducer } from './library/reducers';

const rootReducer = combineReducers({
  library: libraryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middleWareEnhancer = applyMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
}
