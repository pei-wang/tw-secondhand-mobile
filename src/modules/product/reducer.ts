import * as Redux from 'redux';
import * as D from '../../definitions';

export const ProductReducer: Redux.Reducer<D.ProductState> = (
  state: D.ProductState, action: D.ProductAction
): D.ProductState => {
  state = state || [];
  switch (action.type) {
    case 'UPDATE_PRODUCTS': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const orders: Redux.Reducer<D.ProductState> = (
  state: D.ProductState, action: D.ProductAction
): D.ProductState => {
  state = state || [];
  switch (action.type) {
    case 'UPDATE_BOUGHT': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const owned: Redux.Reducer<D.ProductState> = (
  state: D.ProductState, action: D.ProductAction
): D.ProductState => {
  state = state || [];
  switch (action.type) {
    case 'UPDATE_OWNED': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default ProductReducer;
