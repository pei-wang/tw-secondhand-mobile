import * as Redux from 'redux'
import * as D from '../../definitions'

export const TradeReducer: Redux.Reducer<D.TradeState> = (state: D.TradeState, action: D.ProductAction): D.TradeState => {
    state = state || {}
    switch (action.type) {
        case 'UPDATE_UPLOAD_IMAGE': {
            return Object.assign({}, state, {imageOnCloud: action.payload})
        }
        case 'UPDATE_TRADE': {
            return Object.assign({}, state, {merchant: action.payload})
        }
        default:
            return state
    }
}

export default TradeReducer