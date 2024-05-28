let space = "\n";
//Array of fruits
console.log('Question no : 01 ------- Array of Fruits');
const fruits : string[] =["apple","banana","mango","orange"];
console.log(fruits);
console.log(space);


//Array of Numbers
console.log('Question no : 02 ------- Array of Numbers');
const numbers =[10,20,30,40];
console.log(numbers);
console.log(space);

//Access Element of fruits
console.log('Question no : 03 ------- Access third element of fruit array');
let thirdFruit = fruits[2];
console.log(thirdFruit);
console.log(space);


//Change the number 
console.log('Question no : 04 ------- Change the number at index 2 by 25');
const no=numbers.indexOf(20);
  if(no!==3){
    numbers[no]=25;
  }
console.log(numbers);
console.log(space);

//Add element in fruit array
console.log('Question no : 05 ------- Add element in array of fruits');
fruits.push('grape');
console.log(fruits);
console.log(space);

//Remove and assign
console.log('Question no : 06 ------- Remove and assign the last');
//fruits.pop();
let lastFruit=fruits.pop();
console.log(fruits);
console.log(lastFruit);
console.log(space);


//Remove and assign
console.log('Question no : 07 ------- Remove and assign the first');
//fruits.shift();
let firstFruit=fruits.shift();
console.log(fruits);
console.log(firstFruit);
console.log(space);

//Add kiwi to fruits
console.log('Question no : 08 ------- Add kiwi to the fruits at start');
fruits.unshift("kiwi");
console.log(fruits);
console.log(space);


//remove 2 elements 
console.log('Question no : 09 ------- Remove 2 elements starting from 1');
console.log(fruits);
console.log('The removed elements are : ');
console.log(fruits.splice(1,2));
console.log('The Final Array');
console.log(fruits);
console.log(space);


//add pineapple and pear
console.log('Question no : 10 ------- Add fruits starting from index 2');
fruits.splice(2,0,'pineapple');
fruits.splice(3,0,'pear');
console.log(fruits);
console.log(space);

//new array and add first two element of existing array
console.log('Question no : 11 ------- Add fruits starting from index 2 in new array');
const citrusFruits  : string []=[];
citrusFruits.push(fruits[0],fruits[1]);
console.log(citrusFruits);
console.log(space);


//new array and add first two element of existing array
console.log('Question no : 12 ------- Add fruits starting from index 2');
const lastTwofruits : string []=[];
lastTwofruits.push(fruits[2],fruits[3]);
console.log(lastTwofruits);
console.log(space);
