import productService from '../utils/productService';
import { PRODUCTS_LIST_FETCH_SUCCESS } from '../utils/constants';

export const productsListFetchSuccess = productList => ({
  type: PRODUCTS_LIST_FETCH_SUCCESS,
  productList,
})

export const loadProductsList = (categoryId) => async (dispatch) => {
  try {
    const response = await productService.getProductsResults(categoryId);
    dispatch(productsListFetchSuccess(response.productList));
  } catch (error) {
    throw (error);
  }
}