package poly.store.service;

import java.util.List;

import org.springframework.stereotype.Service;

import poly.store.entity.Category;


public interface CategoryService {

	List<Category> findAll();


}
