import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'

//const home_counter = require("../home/reducers/home_counter_reducer").default;
//const carReducer = require("../car/reducers/car_reducer").default;

export const rootReducer = combineReducers(
  {
    routing: routerReducer
  }
);

const store =  createStore(rootReducer,// {}
  applyMiddleware(
     thunk//,
  )
);

// store.dispatch(requestUserInfo());
// store.dispatch(chatInit());

export default store;