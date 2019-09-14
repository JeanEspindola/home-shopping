package com.hs.api.service;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.hs.api.exception.CategoryNotFoundException;
import com.hs.api.entity.Category;
import com.hs.api.repository.CategoryRepository;
import com.hs.api.toa.CategoryResourceAssembler;
import com.hs.api.controller.CategoryController;

@Service
public class CategoryService {

	private CategoryRepository repository;

	private CategoryResourceAssembler assembler;

	CategoryService(CategoryRepository repository, CategoryResourceAssembler assembler) {
		this.repository = repository;
		this.assembler = assembler;
	}

	public Resources<Resource<Category>> getAllCategories() {
		List<Resource<Category>> categories = repository.findAll().stream()
				.map(assembler::toResource)
				.collect(Collectors.toList());

		return new Resources<>(categories,
				linkTo(methodOn(CategoryController.class).getCategories()).withSelfRel());
	}

	public Resource<Category> getSingleCategory(@PathVariable Long id) {
		Category category = repository.findById(id)
				.orElseThrow(() -> new CategoryNotFoundException(id));

		return assembler.toResource(category);
	}

	public ResponseEntity<?> saveNewCategory(@RequestBody Category newCategory) throws URISyntaxException {

		Resource<Category> resource = assembler.toResource(repository.save(newCategory));

		return ResponseEntity
				.created(new URI(resource.getId().expand().getHref()))
				.body(resource);
	}

	public ResponseEntity<?> updateCategory(@RequestBody Category newCategory, @PathVariable Long id) throws URISyntaxException {

		Category updatedCategory = repository.findById(id)
				.map(category -> {
					category.setName(newCategory.getName());
					return repository.save(category);
				})
				.orElseGet(() -> {
					newCategory.setId(id);
					return repository.save(newCategory);
				});

		Resource<Category> resource = assembler.toResource(updatedCategory);

		return ResponseEntity
				.created(new URI(resource.getId().expand().getHref()))
				.body(resource);
	}

	public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}