import 'whatwg-fetch';
import { API_BASE_URL, API_CATEGORIES, DELETE_PATH } from './constants';

const categoriesUrl = `${API_BASE_URL}${API_CATEGORIES}`;

class CategoryService {
  static async getCategoryResults() {
    return fetch(categoriesUrl)
      .then(response => response.json())
      .then(json => json._embedded)
      .catch(error => error);
  }

  static async deleteCategory(categoryId) {
    const url = `${categoriesUrl}/${DELETE_PATH}/${categoryId}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json)
      .catch(error => error);
  }

  static async updateCategory(categoryId, objectParam) {
    const url = `${categoriesUrl}/${DELETE_PATH}/${categoryId}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json)
      .catch(error => error);
  }
}

export default CategoryService;