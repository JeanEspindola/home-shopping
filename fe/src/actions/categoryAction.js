import categoryService from '../utils/categoryService';
import { CATEGORY_LIST_FETCH_SUCCESS } from '../utils/constants';

export const categoriesFetchSuccess = categoryList => ({
  type: CATEGORY_LIST_FETCH_SUCCESS,
  categoryList,
})

export const loadCategoryList = () => async (dispatch) => {
  try {
    const response = await categoryService.getCategoryResults();
    dispatch(categoriesFetchSuccess(response));
  } catch (error) {
    throw (error);
  }
}