package com.hs.api.controller;

import com.hs.api.entity.Product;
import com.hs.api.service.ProductService;

import java.net.URISyntaxException;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ProductController {

	private final ProductService service;

	ProductController(ProductService service) {
		this.service = service;
	}

	@GetMapping("/products")
	public Resources<Resource<Product>> getProducts() {
		return service.getAllProducts();
	}

	@GetMapping("/products/{id}")
	public Resource<Product> getProduct(@PathVariable Long id) {
		return service.getSingleProduct(id);
	}

	@PostMapping("/products/create")
	public ResponseEntity<?> createNewProduct(@RequestBody Product newProduct) throws URISyntaxException {
		return service.saveNewProduct(newProduct);
	}

	@PutMapping("/products/edit/{id}")
	public ResponseEntity<?> editProduct(@RequestBody Product newProduct, @PathVariable Long id) throws URISyntaxException {
		return service.updateProduct(newProduct, id);
	}

	@DeleteMapping("/products/delete/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
		return service.deleteProduct(id);
	}
}