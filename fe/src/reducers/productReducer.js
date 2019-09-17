import {
  PRODUCTS_LIST_FETCH_SUCCESS, PRODUCT_ADD_NEW_SUCCESS, PRODUCT_DELETE_SUCCESS, 
  PRODUCT_UPDATE_SUCCESS,
} from '../utils/constants';
import initialState from './initialState';
import {
  removeObjectFromArray, addNewProductObjectToList, enhanceListObjects, updateProductItem,
} from '../utils/dataHelper';

function products(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        productList: enhanceListObjects(action.productList),
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        productList: updateProductItem(state.productList, action.product, action.productId),
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        productList: removeObjectFromArray(state.productList, action.productId),
      };
    case PRODUCT_ADD_NEW_SUCCESS:
      return {
        ...state,
        productList: addNewProductObjectToList(state.productList),
      };
    default:
      return state;
  }
}

export default products;
