package com.hs.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hs.api.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findProductsByCategoryId(Long id);
}