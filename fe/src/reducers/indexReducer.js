import { combineReducers } from 'redux';
import categories from './categoryReducer';
import products from './productReducer';
import currency from './currencyReducer';

export default combineReducers({
  categories,
  products,
  currency,
});