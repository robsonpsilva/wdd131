// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
// myInfo.favoriteFoods.forEach(myFunction)

const foodsElement = document.querySelector('#favorite-foods');
  function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
  }

  const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
  // we need to flatten the array of strings into one big string. .join does this.
  foodsElement.innerHTML = foodListElements.join('');

function myFunction(value){
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = value;
  document.querySelector("#favorite-foods").appendChild(favoriteFood);
}