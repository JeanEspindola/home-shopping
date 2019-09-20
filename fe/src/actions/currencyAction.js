import currencyService from '../utils/currencyService';
import { CURRENCY_LIST_FETCH_SUCCESS } from '../utils/constants';

export const currencyListFetchSuccess = currencyList => ({
  type: CURRENCY_LIST_FETCH_SUCCESS,
  currencyList
});

export const loadCurrencyList = () => async (dispatch) => {
  try {
    const response = await currencyService.getCurrencyResults();
    dispatch(currencyListFetchSuccess(response.rates));
  } catch (error) {
    throw (error);
  }
}
