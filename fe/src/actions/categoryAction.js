import categoryService from '../utils/categoryService';
import {
   CATEGORY_LIST_FETCH_SUCCESS, CATEGORY_SELECTED_SUCCESS, CATEGORY_DELETE_SUCCESS,
} from '../utils/constants';

export const categoriesDeleteSuccess = categoryId => ({
  type: CATEGORY_DELETE_SUCCESS,
  categoryId,
})

export const categorySelectedSuccess = (categoryIdSelected, categoryTitle ) => ({
  type: CATEGORY_SELECTED_SUCCESS,
  categoryIdSelected,
  categoryTitle,
});

export const categoriesFetchSuccess = categoryList => ({
  type: CATEGORY_LIST_FETCH_SUCCESS,
  categoryList,
})

export const loadCategoryList = () => async (dispatch) => {
  try {
    const response = await categoryService.getCategoryResults();
    dispatch(categoriesFetchSuccess(response.categoryList));
  } catch (error) {
    throw (error);
  }
}

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await categoryService.deleteCategory(categoryId);
    dispatch(categoriesDeleteSuccess(categoryId));
  } catch (error) {
    console.log(error);
  }
}