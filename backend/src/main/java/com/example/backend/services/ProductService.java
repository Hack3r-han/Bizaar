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

    public Product save(Product product){
        return repository.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = repository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id " + id));
    
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setImage(productDetails.getImage());
    
        return repository.save(product);
    }
    
    public void deleteProduct(Long id) {
        if (!repository.existsById(id)) {
            throw new ProductNotFoundException("Product not found with id " + id);
        }
        repository.deleteById(id);
    }
}    
