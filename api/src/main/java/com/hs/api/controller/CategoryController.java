package com.hs.api.controller;

import com.hs.api.entity.Category;
import com.hs.api.service.CategoryService;

import java.net.URISyntaxException;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CategoryController {

	private final CategoryService service;

	CategoryController(CategoryService service) {
		this.service = service;
	}

	@GetMapping("/categories")
	public Resources<Resource<Category>> getCategories() {
		return service.getAllCategories();
	}

	@GetMapping("/categories/{id}")
	public Resource<Category> getSingleCategory(@PathVariable Long id) {
		return service.getSingleCategory(id);
	}

	@PostMapping("/categories/create")
	public ResponseEntity<?> createNewCategory(@RequestBody Category newCategory) throws URISyntaxException {
		return service.saveNewCategory(newCategory);
	}

	@PutMapping("/categories/edit/{id}")
	public ResponseEntity<?> editCategory(@RequestBody Category newCategory, @PathVariable Long id) throws URISyntaxException {
		return service.updateCategory(newCategory, id);
	}

	@DeleteMapping("/categories/delete/{id}")
	public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
		return service.deleteCategory(id);
	}
}