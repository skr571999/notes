# Inheritance

```js
function Item(color, count) {
  this.color = color;
  this.count = count;
  this.log = function() {
    console.log("Color : " + this.color + "\nCount : " + this.count);
    return 0;
  };
}

let item1 = new Item("green", 12);

console.log(item1);

// First Method : Using the Prototypal Inheritance
// SpecialItem.prototype = new Item();
// console.log(SpecialItem);

// Second Method :
function SpecialItem(name, color, count) {
  Item.call(this, color, count);
  this.name = name;
  this.describe = function() {
    console.log("Name : " + this.name);
    console.log(this.log());
    return 0;
  };
}

let specialItem1 = new SpecialItem("FirstItem", "gray", 123);

console.log(specialItem1);
```
