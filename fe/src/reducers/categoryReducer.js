import { CATEGORY_LIST_FETCH_SUCCESS, CATEGORY_SELECTED_SUCCESS } from '../utils/constants';
import initialState from './initialState';

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
    default:
      return state;
  }
}

export default categories;
