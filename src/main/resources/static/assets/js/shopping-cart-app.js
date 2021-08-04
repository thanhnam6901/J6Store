const app = angular.module("shopping-cart-app", []);

app.controller("shopping-cart-ctrl", function($scope, $http){
	//Quan ly gio hang
	
	$scope.cart = {
		items: [],
		//Them san pham vao gio hang
		add(id){
			var item = this.items.find(item => item.id == id);
			
			if(item){
				item.qty++;
				this.saveToLocalStorage();
			}
			else{
				$http.get(`/rest/products/${id}`).then(resp => {
					resp.data.qty = 1;
					this.items.push(resp.data);
					this.saveToLocalStorage();
				})
			}
		},
		//Xoa san pham khoi gio hang
		remove(id){
			var index = this.items.findIndex(item => item.id == id);
			this.items.splice(index, 1);
			this.saveToLocalStorage();
		},
		//Xoa cac mat hang trong gio
		clear(){
			this.items = [];
			this.saveToLocalStorage();			
		},
		//tinh thanh tien cac mat hang trong gio
		amt_of(item){},
		//tinh tong so luong cac mat hang trong gio
		get count(){
			return this.items
			.map(item => item.qty)
			.reduce((total, qty) => total += qty, 0);
		},
		//tong thanh tien cac mat hang trong gio
		get amount(){			
			return this.items
			.map(item => item.qty * item.price)
			.reduce((total, qty) => total += qty, 0);
		},
		//Luu gio hang vao Storage
		saveToLocalStorage(){
			var json = JSON.stringify(angular.copy(this.items));
			localStorage.setItem("cart", json);
		},
		//Doc gio hang tu local storage
		loadFromLocalStorage(){
			var json = localStorage.getItem("cart");
			this.items = json ? JSON.parse(json) : [];			
		}
	}
	
	$scope.cart.loadFromLocalStorage();
	
	$scope.order = {
		address: "",
		account: {username: $("#username").text()},
		createDate: new Date(),
		get orderDetails(){
			return $scope.cart.items.map(item => {
				return {
					product: {id: item.id},
					price: item.price,
					quantity: item.qty
				}
			});
		},
		purchase(){
			var order = angular.copy(this);
			//thuc hien dat hang
			$http.post("/rest/orders", order).then(resp => {
				alert("Đặt hàng thành công!");
				$scope.cart.clear();
				location.href = "/order/detail/" + resp.data.id;
			}).catch(error => {
				alert("Đặt hàng lỗi");
				console.log(error);
			})
		}
	}
})
