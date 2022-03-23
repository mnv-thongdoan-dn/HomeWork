"use strict";

var $shoppingCarts = document.getElementById('carts');
var carts = JSON.parse(localStorage.getItem('carts')) || [];
var html = '';
var i;

for(i = 0; i < carts.length; i++){
  html += '<tr id="' + carts[i].id + '">' + '<td>' + (i + 1) + '</td><td>' + carts[i].name + '</td><td>' + carts[i].price + '</td><td><img src="' + carts[i].img +'"></td>' + '<td><button type="button" onclick="deleteProduct(this)" >Delete</button></td>';
}

var deleteProduct = function($this) {
  var itemParent = $this.closest('tr');
  var idItem = parseInt(itemParent.getAttribute('id'));
  console.log(idItem)

  if(confirm("Are you sure you want to delete this product?")){
    $shoppingCarts.removeChild(itemParent)
    deleteProductLocal(idItem);
    location.reload();
  }
}

var deleteProductLocal = function(id) {
  var newData = carts.filter(function(item) {
    return item.id !== id;
  })
  localStorage.setItem('carts', JSON.stringify(newData))
}

$shoppingCarts.innerHTML = html;
