const baselineBtn = document.getElementById("baseline-btn");
const stackedBtn = document.getElementById("stacked-btn");
const baselineSnack = document.querySelector(".baseline-snack");
const stackedSnack = document.querySelector(".stacked-snack");

baselineSnack.style.visibility = "hidden";
stackedSnack.style.visibility = "hidden";

function show(snack) {
  snack.style.visibility = "visible";
  setTimeout(() => (snack.style.visibility = "hidden"), 2000);
}
baselineBtn.addEventListener("click", () => {
  show(baselineSnack);
});

stackedBtn.addEventListener("click", () => {
  show(stackedSnack);
});
