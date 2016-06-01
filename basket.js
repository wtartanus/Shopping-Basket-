var shoppingBasket = {
  items: [],
  addItem: function(item,number) {
    var price = item.price * number;
    if(item.getOneFree === true ) {
      var buyItem = { name: item.name, quantity: 
        number * 2, totalPrice: item.price }
    } else {
      var buyItem = { name: item.name, quantity: 
        number, totalPrice: item.price }
    }
    
    this.totalPrice += price;
    this.items.push(buyItem);
    console.log("item= ", this.items)
    
  },
  removeItem: function(item) {
    
    for(var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === item ){
          this.totalPrice -= this.items[i].totalPrice;
          this.items.splice( i,1)
            
      }
    }
    
  },
  totalPrice: 0,
  procentage: function(number1, number2) {
     var result = ((number1 / 100) * number2) 
     return result
  },
  discountOverTwenty: function() {
     for(var i = 0; i < this.items.length; i++) {
      if(this.items[i].totalPrice > 20 ) {
        shoppingBasket.totalPrice -= this.procentage(10,this.items[i].totalPrice) * this.items[i].quantity;
      }
     }
  },
  discountCard: function(number) {
    var result = this.procentage(number, this.totalPrice);
    this.totalPrice -= result;
  },
  buyOneGetOneFree: function(item,number) {
    if( item.getOneFree === true ) {
      item.quantity = number * 2;
    }
     return item;
  }
}


module.exports = shoppingBasket;


















