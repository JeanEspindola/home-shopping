import categoryService from '../utils/categoryService';
import { CATEGORIES_FETCH_SUCCESS } from '../utils/constants';

export const categoriesFetchSuccess = categoryList => ({
  type: CATEGORIES_FETCH_SUCCESS,
  categoryList,
})

export const loadCategoryList = () => async (dispatch) => {
  console.log('test');
  try {
    const response = await categoryService.getCategoryResults();
    dispatch(categoriesFetchSuccess(response));
  } catch (error) {
    throw (error);
  }
}