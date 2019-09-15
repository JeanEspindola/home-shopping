import productService from '../utils/productService';
import { PRODUCTS_LIST_FETCH_SUCCESS } from '../utils/constants';

export const productsListFetchSuccess = categoryList => ({
  type: PRODUCTS_LIST_FETCH_SUCCESS,
  categoryList,
})

export const loadProductsList = () => async (dispatch) => {
  try {
    const response = await productService.getProductsResults();
    dispatch(productsListFetchSuccess(response));
  } catch (error) {
    throw (error);
  }
}