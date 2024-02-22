package com.example.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.exceptions.products.ProductNotFoundException;
import com.example.backend.models.Product;
import com.example.backend.repositories.ProductRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class ProductService {
    
    ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAll(){
        List<Product> products = repository.findAll();

        return products;
    }

    public Product getById(@NonNull Long id) throws Exception{
        Product product = repository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product not found"));

        return product;
    }

    public Product saveProduct(Product product){
        return repository.save(product);
    }
}
