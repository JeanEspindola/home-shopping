import { combineReducers } from 'redux';
import categories from './categoryReducer';
import products from './productReducer'

export default combineReducers({
  categories,
  products,
});