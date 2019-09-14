package com.hs.api.service;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.hs.api.exception.CategoryNotFoundException;
import com.hs.api.exception.ProductNotFoundException;
import com.hs.api.entity.Product;
import com.hs.api.entity.Category;
import com.hs.api.repository.CategoryRepository;
import com.hs.api.repository.ProductRepository;
import com.hs.api.toa.ProductResourceAssembler;
import com.hs.api.controller.ProductController;

@Service
public class ProductService {
	
	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private ProductRepository repository;

	@Autowired
	private ProductResourceAssembler assembler;

//	ProductService(ProductRepository repository, ProductResourceAssembler assembler) {
//		this.repository = repository;
//		this.assembler = assembler;
//	}

	public Resources<Resource<Product>> getAllProducts() {
		List<Resource<Product>> products = repository.findAll().stream()
				.map(assembler::toResource)
				.collect(Collectors.toList());

		return new Resources<>(products,
				linkTo(methodOn(ProductController.class).getProducts()).withSelfRel());
	}

	public Resources<Resource<Product>> getProductsByCategory(Long categoryId) {
		List<Resource<Product>> products = repository.findProductsByCategoryId(categoryId).stream()
				.map(assembler::toResource)
				.collect(Collectors.toList());

		return new Resources<>(products,
				linkTo(methodOn(ProductController.class).getProducts()).withSelfRel());
	}

	public Resource<Product> getSingleProduct(@PathVariable Long id) {
		Product product = repository.findById(id)
				.orElseThrow(() -> new ProductNotFoundException(id));

		return assembler.toResource(product);
	}

	public ResponseEntity<?> saveNewProduct(@RequestBody Product newProduct) throws URISyntaxException {
		Optional<Category> category = categoryRepository.findById(newProduct.getCategory().getId());
		category.orElseThrow(() -> new CategoryNotFoundException(newProduct.getCategory().getId()));
		
		Product product = new Product();
		product.setName(newProduct.getName());
		product.setPrice(newProduct.getPrice());
		product.setCurrency(newProduct.getCurrency());
		product.setCategory(category.get());

		Resource<Product> resource = assembler.toResource(repository.save(product));

		return ResponseEntity
				.created(new URI(resource.getId().expand().getHref()))
				.body(resource);
	}
	
	public ResponseEntity<?> updateProduct(@RequestBody Product newProduct, @PathVariable Long id) throws URISyntaxException {
		Product updatedProduct = repository.findById(id)
				.map(product -> {
					product.setName(newProduct.getName());
					product.setPrice(newProduct.getPrice());
					product.setCurrency(newProduct.getCurrency());
					return repository.save(product);
				})
				.orElseThrow(() -> new ProductNotFoundException(id));

		Resource<Product> resource = assembler.toResource(updatedProduct);

		return ResponseEntity
				.created(new URI(resource.getId().expand().getHref()))
				.body(resource);
	}

	public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
		repository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));	
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}