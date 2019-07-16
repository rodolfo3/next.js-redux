import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const defaultState = {
  example: true,
};


const reducer = (state = defaultState, action) => state;


export const initializeStore = (initialState = defaultState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
