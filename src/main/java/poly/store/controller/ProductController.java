package poly.store.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProductController {

	@RequestMapping("/categories")
	public String product() {
		
		return "categories/category";
	}	
	
	@RequestMapping("/product/{id}")
	public String productList() {
		
		return "product/list";
	}
	
	@RequestMapping("/product/detail/{id}")
	public String productDetail() {
		
		return "product/detail";
	}
}
