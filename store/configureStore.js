import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import { createLogicMiddleware } from 'redux-logic';
import arrLogic from './logics'

const homeReducer = require("../home/reducers/home_reducer").default;
const pizzasReducer = require("../carte/reducers/pizzas_reducers").default;

export const rootReducer = combineReducers(
  {
    routing: routerReducer,
    homeReducer,
    pizzasReducer,
  }
);

const logicMiddleware = createLogicMiddleware(arrLogic, {});

const store =  createStore(rootReducer,// {}
  applyMiddleware(
    logicMiddleware,
  )
);

export default store;