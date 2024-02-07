const display = document.getElementById("counter-display");
const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
let count = 0;

incrementButton.addEventListener("click", function () {
  count++;
  display.innerText = count;
});
decrementButton.addEventListener("click", function () {
  count--;
  display.innerText = count;
});
