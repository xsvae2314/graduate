

//  从本地存储获取 购物车商品数量 导航栏显示
function getCartCount(){
	var shoppingCart = localStorage.getItem('shoppingCart');
	// 本地未检测到存储商品 返回购物车数量为0
	if(!shoppingCart){
		return 0;
	}
	// 本地检测到存储商品 返回购物车数量为存储的legnth
	if(shoppingCart){
		shoppingCart = JSON.parse(shoppingCart);
		return shoppingCart.length;
	}
}





