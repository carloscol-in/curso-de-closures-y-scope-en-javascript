// Global scope
var fruit = 'Apple';
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Mexico'; // if you don't use var, let, or const. This variable will be declared as global
    console.log(country);
}

countries();
console.log(country);