import {
  CATEGORY_LIST_FETCH_SUCCESS, CATEGORY_SELECTED_SUCCESS, CATEGORY_DELETE_SUCCESS,
  CATEGORY_UPDATE_SUCCESS,
} from '../utils/constants';
import initialState from './initialState';
import { removeObjectFromArray } from '../utils/dataHelper';

function categories(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LIST_FETCH_SUCCESS:
      return {
        ...state,
        categoryList: action.categoryList,
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
        categoryList: removeObjectFromArray(action.categoryList, action.categoryId),
        categoryIdSelected: null,
        categoryTitle: '',
      }
    default:
      return state;
  }
}

export default categories;
