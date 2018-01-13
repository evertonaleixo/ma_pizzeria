import { CHECKOUT_TABLE } from './actions_type'
let DeviceInfo = require('react-native-device-info');

let checkoutTableAction = (table_id) => {
    let mac = 'afaeegaef'

    //let mac = DeviceInfo.getUniqueID();
        
    return {
        type: CHECKOUT_TABLE,
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

export default checkoutTableAction;