import categoryService from '../utils/categoryService';
import {
  CATEGORY_LIST_FETCH_SUCCESS, CATEGORY_SELECTED_SUCCESS, CATEGORY_DELETE_SUCCESS,
  CATEGORY_UPDATE_SUCCESS, CATEGORY_ADD_NEW_SUCCESS,
} from '../utils/constants';

export const categoriesDeleteSuccess = categoryId => ({
  type: CATEGORY_DELETE_SUCCESS,
  categoryId,
});

export const categoryUpdateSuccess = (category, categoryId) => ({
  type: CATEGORY_UPDATE_SUCCESS,
  category,
  categoryId,
});

export const categoryAddNewSuccess = () => ({
  type: CATEGORY_ADD_NEW_SUCCESS,
});

export const categorySelectedSuccess = (categoryIdSelected, categoryTitle) => ({
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
    await categoryService.deleteCategory(categoryId);
    dispatch(categoriesDeleteSuccess(categoryId));
  } catch (error) {
    console.log(error);
  }
}

export const updateCategory = (categoryId, objectParam) => async (dispatch) => {
  try {
    const response = await categoryService.updateCategory(categoryId, objectParam);
    dispatch(categoryUpdateSuccess(response, categoryId));
  } catch (error) {
    console.log(error);
  }
}

export const createCategory = (categoryId, objectParam) => async (dispatch) => {
  try {
    const response = await categoryService.createCategory(objectParam);
    dispatch(categoryUpdateSuccess(response, categoryId));
  } catch (error) {
    console.log(error);
  }
}