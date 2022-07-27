// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`);

function cupsNeed() {
  console.log("Write how many cups of coffee you will need:");
  let userInOne = Number(input());
  let water = 200;
  let milk = 50;
  let coffeeBeans = 15;
  console.log(`for ${userInOne} cups of coffee you will need:
  ${water * userInOne} ml of water
  ${milk * userInOne} ml of milk
  ${coffeeBeans * userInOne} g of coffee beans`);
}

cupsNeed();


