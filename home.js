"use strict";

var $productList = document.getElementById("product-list");
var $quantityCarts = document.getElementById("quantity-cart");
var products = JSON.parse(localStorage.getItem('products')) || [];
var carts = JSON.parse(localStorage.getItem('carts')) || [];
var html = '';
var i;

for(i = 0; i < products.length; i++){
  html += '<li class="product-item" id="' + products[i].id + '">' + 
  '<img src="' + products[i].img + '">' + 
  '<p><span>' + products[i].name + '</span><span>' + products[i].price + '</span></p>' +
  '<button type="button" onclick="addToCart(this)">Add To Card</button>' +
  '</li>';
}

$productList.innerHTML = html;

var addToCart = function($this){
  var itemParent = $this.closest('li')
  var idItem = parseInt(itemParent.getAttribute('id'));
  var findItem = products.filter(function(item){
    return item.id === idItem;
  })

  // check product befor add to carts
  var findProduct = carts.findIndex(function(item) {
    return item.id === findItem[0].id;
  })

  if(findProduct < 0){
    carts.push(findItem[0]);
    localStorage.setItem('carts', JSON.stringify(carts))
    quantityCarts(carts);
    setTimeout(function() { alert("Add product to carts success !"); }, 100);
  }
}

var quantityCarts = function(carts) {
  if(carts.length > 0){
    $quantityCarts.innerHTML = carts.length;
  }else {
    $quantityCarts.innerHTML = 0;
  }
};

quantityCarts(carts)
