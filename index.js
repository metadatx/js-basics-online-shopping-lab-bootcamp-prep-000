var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
  "itemName": item,
  "itemPrice": Math.floor(Math.random() * 100) + 1
 })
 return `${item} has been added to your cart.`
}

function viewCart() {
  var result = []
  var cartLen = cart.length
  
  if(cartLen > 0){
    for(var i=0; i<cart.length; i++){
      result.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
  }
  if(cartLen > 1){
    var lastItem = result.pop()
    return "In your cart, you have " + result.join(", ") + ", and " + lastItem + "."
  }
  else if(cartLen == 1){
    return "In your cart, you have " + result[0] + "."
  }
  else
    return "Your shopping cart is empty."
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
