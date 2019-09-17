import {
  CATEGORY_LIST_FETCH_SUCCESS, CATEGORY_SELECTED_SUCCESS, CATEGORY_DELETE_SUCCESS,
  CATEGORY_UPDATE_SUCCESS, CATEGORY_ADD_NEW_SUCCESS,
} from '../utils/constants';
import initialState from './initialState';
import {
  removeObjectFromArray, updateCategoryItem, addNewCategoryObjectToList, enhanceListObjects,
} from '../utils/dataHelper';

function categories(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LIST_FETCH_SUCCESS:
      return {
        ...state,
        categoryList: enhanceListObjects(action.categoryList),
      };
    case CATEGORY_SELECTED_SUCCESS:
      return {
        ...state,
        categoryIdSelected: action.categoryIdSelected,
        categoryTitle: action.categoryTitle,
      }
    case CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        categoryList: removeObjectFromArray(state.categoryList, action.categoryId),
        categoryIdSelected: null,
        categoryTitle: '',
      }
    case CATEGORY_UPDATE_SUCCESS:
      return {
        ...state,
        categoryList: updateCategoryItem(state.categoryList, action.category, action.categoryId),
      }
    case CATEGORY_ADD_NEW_SUCCESS:
      return {
        ...state,
        categoryList: addNewCategoryObjectToList(state.categoryList),
      }
    default:
      return state;
  }
}

export default categories;
