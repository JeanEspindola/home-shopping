import 'whatwg-fetch';
import { API_BASE_URL, API_PRODUCTS, DELETE_PATH, CREATE_PATH, EDIT_PATH } from './constants';

const productsUrl = `${API_BASE_URL}${API_PRODUCTS}`;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

class ProductService {
  static async getProductsResults(categoryId) {
    const url = `${productsUrl}?categoryId=${categoryId}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json._embedded)
      .catch(error => error);
  }

  static async deleteProduct(productId) {
    const url = `${productsUrl}/${DELETE_PATH}/${productId}`;
    return fetch(url, {
      method: 'DELETE',
    })
      .then(response => {
        if(!response.ok) {
          return Error(response.statusText);
        }
        return response.json()
      })
      .catch(error => error);
  }

  static async updateProduct(productId, objectParam) {
    const url = `${productsUrl}/${EDIT_PATH}/${productId}`;
    return fetch(url, {
      credentials: 'same-origin',
      headers: headers,
      method: 'PUT',
      body: JSON.stringify(objectParam),
    })
      .then(response => response.json())
      .catch(error => error);
  }

  static async createProduct(objectParam) {
    const url = `${productsUrl}/${CREATE_PATH}`;
    return fetch(url, {
      credentials: 'same-origin',
      headers: headers,
      method: 'POST',
      body: JSON.stringify(objectParam),
    })
      .then(response => response.json())
      .catch(error => error);
  }
}

export default ProductService;
