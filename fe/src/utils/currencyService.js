import 'whatwg-fetch';
import { EXCHANGE_URL, SUPPORTED_CURRENCIES, ACCESS_KEY } from './constants';

const currencyUrl = `${EXCHANGE_URL}?access_key=${ACCESS_KEY}&symbols=${SUPPORTED_CURRENCIES}`;

class CurrencyService {
  static async getCurrencyResults() {
    return fetch(currencyUrl)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default CurrencyService;