package poly.store.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String home() {
		
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
	
	@RequestMapping("/cart/view")
	public String cart() {
		
		return "cart/view";
	}
	
	@RequestMapping("/cart/checkout")
	public String checkOut() {
		
		return "cart/checkout";
	}
	
	@RequestMapping("/ordersdetails")
	public String order() {
		
		return "order/view";
	}
	
	@RequestMapping("/login")
	public String login() {
		
		return "login/signin";
	}
	@RequestMapping("/signUp")
	public String signUp() {
		
		return "login/signup";
	}
}
