let arrShoppingCart = [
  {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
  },
  { 
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
},
{ 
  name:"mushrooms",
  type:"food",
  quantity:10,
  price:.1
},
{
  name:"can of beer",
  type:"alcohol",
  quantity:4,
  price:1.1
},
{
  name:"prosecco",
  type:"alcohol",
  quantity:1,
  price:8.99
},
{
  name:"steak",
  type:"food",
  quantity:2,
  price:3.99
},
{
  name:"blue cheese",
  type:"food",
  quantity:1,
  price:2.99
},
{
  name:"candles",
  type:"home",
  quantity:3,
  price:1.99
},
{ 
  name:"cheesecake",
  type:"food",
  quantity:1,
  price:4.99
},
{ 
  name:"onions",
  type:"food",
  quantity:3,
  price:.4
}];

/**
 * Returns x, the total price of the cart (with discounts applied)
 * @param {array} arrShoppingCart The shopping cart array
 * @param {object} objCoupon a coupon object
 * @returns {number} x the total price of the cart with discounts applied
 */
function getTotalPrice(arrShoppingCart=[],objCoupon={}){
  //setting total of the cart to 0 before the loop starts
  let total = 0;
  //setting the item price to 0 so it isn't redeclared in the loop
  let itemPrice = 0;
  //loops through each item in the shopping cart array
  for(var counter=0; counter < arrShoppingCart.length; counter++){
    // console.log(counter);
    //selects the current cart item using the counter as the array key (the index)
    var objItem = arrShoppingCart[counter];
    // console.log(objItem);
    itemPrice = parseFloat(objItem.quantity) * parseFloat(objItem.price);
    // console.log(itemPrice);
    if(objCoupon && objCoupon.type == 'percentage'){
      if(objCoupon.category == objItem.type || objCoupon.category == 'all'){
        itemPrice = (itemPrice/100) * (100 - objCoupon.value);
        // console.log(itemPrice);
      } 
    }
    total = total + itemPrice;
    // console.log(total);
  }
  if(objCoupon && objCoupon.type == 'total'){
    total = total - objCoupon.value;
  }
  return total.toFixed(2);
}
let objCoupon = {
  name:'20OFF',
  value:20,
  category:'food',     //Category is food, home or alcohol - matches type
  type:'percentage'
};
let cartTotal = getTotalPrice(arrShoppingCart,objCoupon);
console.log(cartTotal);