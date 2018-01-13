import { CHOOSE_TABLE } from './actions_type'
let DeviceInfo = require('react-native-device-info');

let chooseTableAction = (table_id) => {
    let mac = 'afaeegaef'
    //DeviceInfo.getUniqueID();
        
    return {
        type: CHOOSE_TABLE,
        payload: {
            table_id,
            mac,
        },
        endpoint: {
            url: 'http://www.mocky.io/v2/5a4bed87300000f51da69786',
            method: 'get',
            data: {},
            params: {},
        },
    };
};

export default chooseTableAction;