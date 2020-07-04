# Propototype Demo

```js
function Item() {
  this.color = "red";
  this.count = 12;
  this.log = function() {
    console.log("Color : " + this.color + "\nCount : " + this.count);
  };
}

let i1 = new Item();
console.log(i1);
i1.height = 122; // height will be added to i1 only

Item.apple = 111; // apple will be added to Item only not to i1 and i2
Item.prototype.banana = 222; // banana will be added to i2 and i1

let i2 = new Item();
console.log(i2);
```
