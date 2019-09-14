package com.hs.api.config;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;

import com.hs.api.entity.Category;
import com.hs.api.entity.Product;
import com.hs.api.repository.CategoryRepository;
import com.hs.api.repository.ProductRepository;

@Configuration
@Slf4j
class LoadDatabase {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@EventListener(ApplicationReadyEvent.class)
	public void fillDatabase() {
		Category category1 = new Category();
		category1.setName("Fashion");
		categoryRepository.save(category1);
		
		Category category2 = new Category();
		category2.setName("Living");
		categoryRepository.save(category2);

		Category category3 = new Category();
		category3.setName("Cosmetics");
		categoryRepository.save(category3);
		
		Product product1 = new Product();
		product1.setName("Jeans");
		product1.setPrice(25.99);
		product1.setCurrency("Euro");
		product1.setCategory(category1);
		productRepository.save(product1);
		
		Product product2 = new Product();
		product2.setName("TV");
		product2.setPrice(599.99);
		product2.setCurrency("Euro");
		product2.setCategory(category2);
		productRepository.save(product2);
		
		Product product3 = new Product();
		product3.setName("Body Cream");
		product3.setPrice(4.98);
		product3.setCurrency("Dollar");
		product3.setCategory(category3);
		productRepository.save(product3);
	}
}