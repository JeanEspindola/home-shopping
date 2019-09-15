import { CATEGORIES_FETCH_SUCCESS } from '../utils/constants';
import initialState from './initialState';

function categories(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        categoryList: action.categoryList,
      };
    default:
      return state;
  }
}

export default categories;
