package com.example.backend.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.Product;
import com.example.backend.services.ProductService;

import jakarta.annotation.Nonnull;
import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "${api-endpoint}/products")
public class ProductController {
    
    ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping(path = "")
    public List<Product> index(){
        List<Product> products = service.getAll();
        return products;
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Product> show(@Nonnull @PathVariable("id") Long id) throws Exception{
        Product product = service.getById(id);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(product);
    }

    @PostMapping(path = "")
    public ResponseEntity<Product> create(@Nonnull @RequestBody Product product){
        Product newProduct = service.save(product);

        return ResponseEntity.status(201).body(newProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long productId,
                                            @Valid @RequestBody Product productDetails) {
        try {
            Product product = service.getById(productId);
            if (product == null) {
                return ResponseEntity.notFound().build();
            }

            product.setName(productDetails.getName());
            product.setDescription(productDetails.getDescription());
            product.setPrice(productDetails.getPrice());
            product.setImage(productDetails.getImage());

            Product updatedProduct = service.save(product);
            return ResponseEntity.ok(updatedProduct);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable(value = "id") Long productId) {
        try {
            Product product = service.getById(productId);
            if (product == null) {
                return ResponseEntity.notFound().build();
            }

            service.deleteProduct(productId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
