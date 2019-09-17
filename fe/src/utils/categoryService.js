import 'whatwg-fetch';
import { API_BASE_URL, API_CATEGORIES, DELETE_PATH, CREATE_PATH, EDIT_PATH } from './constants';

const categoriesUrl = `${API_BASE_URL}${API_CATEGORIES}`;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

class CategoryService {
  static async getCategoryResults() {
    return fetch(categoriesUrl)
      .then(response => response.json())
      .then(json => json._embedded)
      .catch(error => error);
  }

  static async deleteCategory(categoryId) {
    const url = `${categoriesUrl}/${DELETE_PATH}/${categoryId}`;
    return fetch(url, {
      method: 'DELETE',
    })
      .then(response => {
        if(!response.ok) {
          return Error(response.statusText);
        }
        return response.json()
      })
      .then(json => json)
      .catch(error => error);
  }

  static async updateCategory(categoryId, objectParam) {
    const url = `${categoriesUrl}/${EDIT_PATH}/${categoryId}`;
    return fetch(url, {
      credentials: 'same-origin',
      headers: headers,
      method: 'PUT',
      body: JSON.stringify(objectParam),
    })
      .then(response => response.json())
      .then(json => json)
      .catch(error => error);
  }

  static async createCategory(objectParam) {
    const url = `${categoriesUrl}/${CREATE_PATH}`;
    return fetch(url, {
      credentials: 'same-origin',
      headers: headers,
      method: 'POST',
      body: JSON.stringify(objectParam),
    })
      .then(response => response.json())
      .then(json => json)
      .catch(error => error);
  }
}

export default CategoryService;