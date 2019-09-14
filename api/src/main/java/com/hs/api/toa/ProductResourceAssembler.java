package com.hs.api.toa;

import com.hs.api.entity.Product;
import com.hs.api.controller.ProductController;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;
import org.springframework.stereotype.Component;

@Component
public class ProductResourceAssembler implements ResourceAssembler<Product, Resource<Product>> {

	@Override
	public Resource<Product> toResource(Product product) {

		return new Resource<>(product,
				linkTo(methodOn(ProductController.class).getProduct(product.getId())).withSelfRel(),
				linkTo(methodOn(ProductController.class).getProducts()).withRel("products"));
	}
}