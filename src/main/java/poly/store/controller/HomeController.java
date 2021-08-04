package poly.store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import poly.store.entity.Product;
import poly.store.service.ProductService;

@Controller
public class HomeController {
	
	@Autowired
	ProductService productService;
	
	@RequestMapping("/")
	public String home(Model model) {
		
//		List<Product> list = productService.findAll();
//		model.addAttribute("items", list);
		
		return "home";
	}
	
	@RequestMapping("/admin")
	public String admin() {
		
		return "admin/dashboard";
	}
	
	@RequestMapping("/admin/category")
	public String adminCate() {
		
		return "admin/category";
	}

}
