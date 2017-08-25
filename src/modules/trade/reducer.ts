import * as Redux from 'redux';
import * as D from '../../definitions';

export const TradeReducer: Redux.Reducer<D.TradeState> = (
    state: D.TradeState, action: D.ProductAction
): D.TradeState => {
    state = state || {};
    switch (action.type) {
        case 'UPDATE_UPLOAD_IMAGE': {
            return action.payload;
        }
        default:
            return state;
    }
};