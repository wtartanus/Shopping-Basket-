var shoppingBasket = {
  items: [],
  addItem: function(item) {
    this.items.push(item);
    this.totalPrice += item.price;
  },
  removeItem: function(item) {
    
    for(var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === item ){
          this.totalPrice -= this.items[i].price;
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
      if(this.items[i].price > 20 ) {
        this.totalPrice -= this.procentage(10,this.items[i].price)
      }
     }
  },
  discountCard: function(number) {
    var result = this.procentage(number, this.totalPrice);
    this.totalPrice -= result;
  },
  buyOneGetOneFree: function(item) {
    this.addItem(item);
    var freeItem = { name: item.name, price: 0 };
    this.addItem(freeItem);
  }
}

module.exports = shoppingBasket;


















