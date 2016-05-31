var basket =  require( '../basket' );
var assert = require( 'chai' ).assert;

var poster = {name: "poster", price: 7}
basket.addItem( { name: "book", price: 10} )
basket.addItem( { name: "cd", price: 15} )
basket.addItem( { name: "mp3", price: 40} )

describe( 'Shopping Basket', function() {

 it("Should be able to add item",function() {
    basket.addItem(poster);
    assert.equal(4, basket.items.length)
 });

 it("Should be able to remove item", function() {
  basket.removeItem("poster");
  assert.equal(3, basket.items.length)
 });

 it("Should be able to calculate total price", function() {
  assert.equal(65, basket.totalPrice);
 });

 it("Should count %", function() {
    assert.equal( 4, basket.procentage(10,40))
 });

 it("Should discount 10% where price is above 20", function() {
   basket.discountOverTwenty();
   assert.equal( 61, basket.totalPrice);
 });

 it("Should discount 5% with discount card", function() {
   basket.discountCard(5);
   assert.equal( 57.95, basket.totalPrice);
 });

 it("Should add two the same items one for free", function() {
    basket.buyOneGetOneFree( { name: "Wine", price: 5} );
    console.log(basket.items)
    assert.equal(5, basket.items.length);
    assert.equal(62.95, basket.totalPrice);
 });


 

});









