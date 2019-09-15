import 'whatwg-fetch';
import { API_BASE_URL, API_CATEGORIES } from './constants';

const categoriesUrl = `${API_BASE_URL}${API_CATEGORIES}`;

class CategoryService {
  static async getCategoryResults() {
    return fetch(categoriesUrl)
      .then(response => response.json())
      .then(json => json)
      .catch(error => error);
  }
}

export default CategoryService;