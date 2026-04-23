package com.anjali.ecommerce.controller;

import com.anjali.ecommerce.entity.Product;
import com.anjali.ecommerce.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    
    @GetMapping 
    public List<Product> getAllProducts() { 
        return productService.getAllProducts(); 
    }
    
    @PostMapping 
    public Product addProduct(@RequestBody Product product) { 
        return productService.addProduct(product); 
    }
}
