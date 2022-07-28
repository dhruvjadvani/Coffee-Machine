const input = require('sync-input');
// For a start, the coffee machine has $550, 400 ml of water, 540 ml of milk, 120 g of coffee beans, and 9 disposable cups.
let money = 550;
let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;

function print() {
  console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
${money} of money`);
}

function buy() {
  let coffeeShop = {
    "espresso" : 1,
    "latte" : 2,
    "cappuccino" : 3
  };
  console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
  let userBought = Number(input());
  if(userBought == coffeeShop['espresso']) {
    // One espresso requires 250 ml of water and 16 g of coffee beans. It costs $4;
    water = water - 250;
    beans = beans - 16;
    money = money + 4;
    cups = cups - 1;
    print();
    
  } else if(userBought == coffeeShop['latte']) {
    // One latte requires 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7;
    water = water - 350;
    milk = milk - 75;
    beans = beans - 20;
    money = money + 7;
    cups = cups - 1;
    print();
    
  } else if(userBought == coffeeShop['cappuccino']) {
    // One cappuccino requires 200 ml of water, 100 ml of milk, and 12 g of coffee beans. It costs $6.
    water = water - 200;
    milk = milk - 100;
    beans = beans - 12;
    money = money + 6;
    cups = cups - 1;
    print();
  }

}


function fill() {
console.log("Write how many ml of water you want to add:");
let waterAdd = Number(input());
water = water + waterAdd;

console.log("Write how many ml of milk you want to add:");
let milkAdd = Number(input());
milk = milk + milkAdd;

console.log("Write how many grams of coffee beans you want to add:");
let beansAdd = Number(input());
beans = beans + beansAdd;

console.log("Write how many disposable coffee cups you want to add:");
let cupsAdd = Number(input());
cups = cups + cupsAdd;

print();
}

function take() {
 console.log(`I gave you ${money}`);
 money = 0;
 print();
}

print();
console.log("Write action (buy, fill, take):");
let userChoose = input();

if(userChoose == 'buy') {
  buy();
} else if(userChoose == 'fill') {
  fill();
} else if(userChoose == 'take') {
  take();
}

