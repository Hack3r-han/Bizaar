package com.example.backend.integration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.example.backend.models.Product;
import com.example.backend.repositories.ProductRepository;

@DataJpaTest
public class ProductRepositoryTest {
    
    @Autowired
    TestEntityManager entityManager;

    @Autowired
    ProductRepository repository;


    @Test
    @DisplayName("Find all Product")
    void testGetAllProduct() {
        List<Product> products = repository.findAll();
        assertEquals(9, products.size());
        assertThat(products.get(0).getName()).isEqualTo("Jaula Humana");
    }

    @Test
    @DisplayName("Find by id")
    void testGetById(){
        Product product = repository.findById(3L).orElseThrow();
        assertEquals(3L, product.getId());
        assertEquals("Sandía de cubo", product.getName());

    }

    @Test
    void testDeleteProduct(){
        Product product = new Product(0, "Jaula para pajaros", null, 0, null, null);
        entityManager.persist(product);

        repository.deleteById(10L);

        List<Product> products = repository.findAll();
        assertThat(products.size(), is(9));
        assertThat(products.get(0).getName(), containsString("Jaula Humana"));

    }

    @AfterEach
    void tearDown(){
        entityManager.clear();
    }
}
