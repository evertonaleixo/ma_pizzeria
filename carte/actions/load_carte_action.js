import { LOAD_CARTE } from './actions_type'

let loadCarteAction = () => {

    return {
        type: LOAD_CARTE,
        endpoint: {
            url: 'http://www.mocky.io/v2/5a4bed87300000f51da69786',
            method: 'get',
            data: {},
            params: {},
        },
    };
};

export default loadCarteAction;