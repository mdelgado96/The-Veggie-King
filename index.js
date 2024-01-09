let index = 0;
displayFoods();
function displayFoods() {
  let i;
  const foods = document.getElementsByClassName("food");
  for (i = 0; i < foods.length; i++) {
    foods[i].style.display = "none";
  }
  index++;
  if (index > foods.length) {
    index = 1;
  }
  foods[index - 1].style.display = "block";
  setTimeout(displayFoods, 3000);
}
