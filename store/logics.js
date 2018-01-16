import { createLogic } from 'redux-logic';
import axios from 'axios';

const fetchPollsLogic = createLogic({
  type: '/\ASYNC_/', // only apply this logic to this type
  // cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest
  process({ getState, action }, dispatch, done) {
    if(!action.type.startsWith("ASYNC_")) {
        done();
    } else {
        action.type = action.type.substr(6);
        let url = action.endpoint.url;
        let method = action.endpoint.method;
        let data = action.endpoint.data | {};
        let params = action.endpoint.params | {};

        delete action.endpoint;

        axios({
            method,
            url,
        })
        .then(resp => {
            action.type = action.type + '_SUCCESS';
            action = Object.assign(action, {payload:  resp.data} );
            dispatch(action);
        })
        .catch(err => {
            action.type = action.type + '_ERROR';
            action = Object.assign(action, {error:  true, payload: err} );
            dispatch(action);
        })
        .then(() => done());
    }
  }
});

// pollsLogic
export default [
  fetchPollsLogic
];
