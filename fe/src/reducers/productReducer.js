import { PRODUCTS_LIST_FETCH_SUCCESS } from '../utils/constants';
import initialState from './initialState';

function products(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        productList: action.productList,
      };
    default:
      return state;
  }
}

export default products;
