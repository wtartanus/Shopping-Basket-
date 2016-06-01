var basket =  require( '../basket' );
var assert = require( 'chai' ).assert;

var poster = {
  name: "poster", price: 7, stock: 20, getOneFree: false
};
var book = { 
  name: "book", price: 10, stock: 15, getOneFree: true
} ;
var cd = { 
  name: "cd", price: 15, stock: 25, getOneFree: true
} ;
var mp3 = { 
  name: "mp3", price: 40, stock: 30, getOneFree: false
} ;

var wine = {
  name: "wine", price: 5, stock: 40, getOneFree: true
};

describe( 'Shopping Basket', function() {

 it("Should be able to add item",function() {
    basket.addItem(poster, 1);
    basket.addItem(book,2);
    basket.addItem(cd,3);
    basket.addItem(mp3,2);
    basket.addItem(wine, 3);
    assert.equal(5, basket.items.length)
 });

 it("Should be able to remove item", function() {
  basket.removeItem("poster");
  assert.equal(4, basket.items.length)
 });

 it("Should be able to calculate total price", function() {
  assert.equal(160, basket.totalPrice);
 });

 it("Should count %", function() {
    assert.equal( 4, basket.procentage(10,40))
 });

 it("Should discount 10% where price is above 20", function() {
   basket.discountOverTwenty();
   assert.equal( 152, basket.totalPrice);
 });

 it("Should discount 5% with discount card", function() {
   basket.discountCard(5);
   assert.equal( 144.4, basket.totalPrice);
 });




 

});









