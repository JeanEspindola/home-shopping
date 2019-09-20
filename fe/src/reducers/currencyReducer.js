import { CURRENCY_LIST_FETCH_SUCCESS } from '../utils/constants';
import initialState from './initialState';

function currency(state = initialState, action) {
  switch (action.type) {
    case CURRENCY_LIST_FETCH_SUCCESS:
      return {
        ...state,
        currencyList: action.currencyList,
      };
    default:
      return state;
  }
}

export default currency;
