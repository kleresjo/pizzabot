let pizzabBot = document.getElementById("pizzaBot");
const pizzaPrice = 80;

pizzabBot.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hämta aktuella värden för pizzaSort och pizzaAmount här
  const pizzaSort = document.getElementById("choosePizza").value;
  const pizzaAmount = document.getElementById("quantityInput").value;

  if (checkOrderName(pizzaSort)) {
    let orderMinutes = cookingTime(pizzaAmount);
    console.log("Great, I'll get started on your " + pizzaAmount + " " + pizzaSort + ` The pizzas will take ${orderMinutes}  minutes.` );
  } else {
    console.log('We dont have that on the menu');
  }

  function checkOrderName(selectedPizzaValue) {
    return selectedPizzaValue === pizzaSort;
  }
});

function cookingTime(pizzaAmount) {
    if (pizzaAmount <= 2) {
      return 10;
    } else if (pizzaAmount <= 5) {
      return 15;
    } else if (pizzaAmount >= 6) {
      return 20;
    }
  }

function addCode() {
  // Hämta aktuella värden för pizzaSort och pizzaAmount här
  const pizzaSort = document.getElementById("choosePizza").value;
  const pizzaAmount = document.getElementById("quantityInput").value;

  // Hämta antalet minuter här
  const orderMinutes = cookingTime(pizzaAmount);
  console.log("det fungerade");

  document.getElementById("add_to_me").innerHTML +=
    `<h3>You ordered:</h3><p>${pizzaAmount} ${pizzaSort}. <br> The pizzas will take ${orderMinutes} minutes.</p>`;
}