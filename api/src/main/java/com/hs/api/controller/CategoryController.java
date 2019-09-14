package com.hs.api.controller;

import com.hs.api.repository.CategoryRepository;
import com.hs.api.entity.Category;
import com.hs.api.toa.CategoryResourceAssembler;
import com.hs.api.exception.CategoryNotFoundException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;
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

  private final CategoryRepository repository;
  
  private final CategoryResourceAssembler assembler;

  CategoryController(CategoryRepository repository, CategoryResourceAssembler assembler) {
    this.repository = repository;
    this.assembler = assembler;
  }

  // Aggregate root

  @GetMapping("/categories")
  public Resources<Resource<Category>> all() {

    List<Resource<Category>> categories = repository.findAll().stream()
      .map(assembler::toResource)
      .collect(Collectors.toList());

    return new Resources<>(categories,
      linkTo(methodOn(CategoryController.class).all()).withSelfRel());
  }

   @PostMapping("/categories")
   ResponseEntity<?> newCategory(@RequestBody Category newCategory) throws URISyntaxException {

     Resource<Category> resource = assembler.toResource(repository.save(newCategory));

     return ResponseEntity
       .created(new URI(resource.getId().expand().getHref()))
       .body(resource);
   }

  @GetMapping("/categories/{id}")
  public Resource<Category> one(@PathVariable Long id) {

	  Category category = repository.findById(id)
      .orElseThrow(() -> new CategoryNotFoundException(id));

    return assembler.toResource(category);
  }

  @PutMapping("/categories/{id}")
  public ResponseEntity<?> replaceEmployee(@RequestBody Category newCategory, @PathVariable Long id) throws URISyntaxException {

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

  @DeleteMapping("/categories/{id}")
  public ResponseEntity<?> deleteCategory(@PathVariable Long id) {

    repository.deleteById(id);

    return ResponseEntity.noContent().build();
  }
}