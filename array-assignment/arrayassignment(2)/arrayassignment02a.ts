//Part 1: Basic Arrays - Product Inventory
const gap='\n'
type Product = {
    name: string;
    price: number;
    inventory:{                                  //1. Define the type alias for product
      stock: number;
      colorOptions: string[];
    };
};

//First product watches
const products: Product[] = [
  {
    name: 'Watches',                             //2. Array of products with atleast three product objects
    price: 7000,
    inventory:{
    stock: 500,
    colorOptions: ['Silver', 'Golden', 'Black'],
    },
  },  
  //Second product curtains
  {
    name: 'Curtains',
    price: 6500,
    inventory:{
      stock: 390,
      colorOptions: ['Beige', 'Pink', 'White'],
    },
  },
  //Third product frames
  {
    name: 'Frames',
    price: 3999,                                
    inventory:{
    stock: 600,
    colorOptions: ['Grey', 'LightBrown', 'Blue'],
    },
  },
];
//3.Implement a function named changeColor
function changeColor(product: Product, newColor: string) {                               
  if(!product.inventory.colorOptions.indexOf(newColor)){
    console.log(`${newColor} is not available for the product name ${product.name}.`);
    return;
  }
// Adjust price based on new color
if (newColor === 'Green') {    //price for green color price 10% increased
 product.price*=(1+(10/100));
} 
else if (newColor === 'Yellow'){ // price for yellow color price 5% increased
product.price*=(1+(5/100));
}
console.log(`The color of ${product.name} has been changed to ${newColor} and its price is : ${product.price}.`);
}
// 4.Details display
function productList(products: Product[]) {
products.forEach(product => {
console.log(`Name of the product : ${product.name}`);
console.log(`Its Price is : ${product.price} PKR`);
console.log(`Number of Stocks available : ${product.inventory.stock}`);
console.log(`Colors available are : ${product.inventory.colorOptions}`);
console.log(gap);
  })
}
//All products
productList(products);
changeColor(products[2],'Green');    // Color changed to green
productList(products);      // display the list