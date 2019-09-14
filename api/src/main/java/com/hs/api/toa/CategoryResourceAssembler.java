package com.hs.api.toa;

import com.hs.api.entity.Category;
import com.hs.api.controller.CategoryController;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;
import org.springframework.stereotype.Component;

@Component
public class CategoryResourceAssembler implements ResourceAssembler<Category, Resource<Category>> {

	@Override
	public Resource<Category> toResource(Category category) {

		return new Resource<>(category,
				linkTo(methodOn(CategoryController.class).getSingleCategory(category.getId())).withSelfRel(),
				linkTo(methodOn(CategoryController.class).getCategories()).withRel("categories"));
	}
}
