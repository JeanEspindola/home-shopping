import productService from '../utils/productService';
import {
  PRODUCTS_LIST_FETCH_SUCCESS, PRODUCT_ADD_NEW_SUCCESS, PRODUCT_DELETE_SUCCESS, 
  PRODUCT_UPDATE_SUCCESS,
} from '../utils/constants';

export const productsListFetchSuccess = productList => ({
  type: PRODUCTS_LIST_FETCH_SUCCESS,
  productList,
});

export const productDeleteSuccess = productId => ({
  type: PRODUCT_DELETE_SUCCESS,
  productId,
});

export const productUpdateSuccess = (product, productId) => ({
  type: PRODUCT_UPDATE_SUCCESS,
  product,
  productId,
});

export const productAddNewSuccess = () => ({
  type: PRODUCT_ADD_NEW_SUCCESS,
});

export const loadProductsList = (categoryId) => async (dispatch) => {
  try {
    const response = await productService.getProductsResults(categoryId);
    let result = [];
    if (response !== undefined) {
      result = response.productList;
    }
    dispatch(productsListFetchSuccess(result));
  } catch (error) {
    throw (error);
  }
}

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await productService.deleteProduct(productId);
    dispatch(productDeleteSuccess(productId));
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = (productId, objectParam) => async (dispatch) => {
  try {
    const response = await productService.updateProduct(productId, objectParam);
    dispatch(productUpdateSuccess(response, productId));
  } catch (error) {
    console.log(error);
  }
}

export const createProduct = (productId, objectParam) => async (dispatch) => {
  try {
    const response = await productService.createProduct(objectParam);
    dispatch(productUpdateSuccess(response, productId));
  } catch (error) {
    console.log(error);
  }
}
