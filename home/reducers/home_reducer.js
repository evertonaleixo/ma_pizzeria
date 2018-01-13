import {  CHOOSE_TABLE_SUCCESS,
          CHECKOUT_TABLE_SUCCESS }from '../actions/actions_type'

const initialState = {
  loggedIn: false,
  table_id: 0,
};
        
export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_TABLE_SUCCESS:
      
      return Object.assign({}, state, {loggedIn: true, table_id: action.payload.table_id})
    case CHECKOUT_TABLE_SUCCESS:
      
      return Object.assign({}, state, {loggedIn: false, table_id: 0})    
    default:
      return state;
  }
};