var laptop={
               price:72000,
               Storage:'265gb',
               color:'mate',
               procesor:'intel i5'
}

console.log(laptop);
console.log(laptop.price);
console.log(laptop.procesor);

// set a object property value

// laptop.price =22000;
// console.log(laptop.price);

// differnt ways to set a value of an object  properties
laptop.price=22000;
laptop["price"]=25000;
console.log(laptop.price);

var pricePropertyName ="price";

laptop[pricePropertyName]=19000;
console.log(laptop.price);

var stroageProperty ="Storage";
laptop[stroageProperty]="512gb";
console.log(laptop.Storage)

laptop['Storage']="1tb";
console.log(laptop.Storage);
laptop.Storage="5tb";
console.log(laptop.Storage);

