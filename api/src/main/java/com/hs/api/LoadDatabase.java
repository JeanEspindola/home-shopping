package com.hs.api;

import lombok.extern.slf4j.Slf4j;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.hs.api.entity.Category;
import com.hs.api.repository.CategoryRepository;

@Configuration
@Slf4j
class LoadDatabase {

	@Bean
	CommandLineRunner initDatabase(CategoryRepository category) {
		return args -> {      
			log.info("Preloading " + category.save(new Category("Fashion")));
			log.info("Preloading " + category.save(new Category("Living")));
			log.info("Preloading " + category.save(new Category("Cosmetics")));
		};
	}
}