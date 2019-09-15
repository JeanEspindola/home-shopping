import 'whatwg-fetch';
import { API_BASE_URL, API_PRODUCTS } from './constants';

const productsUrl = `${API_BASE_URL}${API_PRODUCTS}`;

class ProductService {
  static async getProductsResults() {
    return fetch(productsUrl)
      .then(response => response.json())
      .then(json => json._embedded)
      .catch(error => error);
  }
}

export default ProductService;