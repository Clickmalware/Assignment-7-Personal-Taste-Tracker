
// 1. Create an array called favoriteFoods with at least 6 foods you love.
//Build an array of favorite foods
let foodList = ["CheeseBurgers", "Japanese", "Ice Cream", "Cajun", "Indian", "Italian"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
//Print to console looping through the array
for (let i = 0; i < foodList.length; i++) {
    console.log("One of my favorite foods is " + foodList[i] + ".");
} 

// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
//Print to console 
    console.log("My # 1 is CheeseBurgers");
    console.log("My # 2 is Japanese");
    console.log("My # 3 is Indian");
    console.log("My # 4 is Italian");
    console.log("My # 5 is Cajun");
    console.log("My # 6 is Ice Cream");

// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
//Create the function printFoodRecommendation that takes in a food name as a parameter then prints the three lines
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious."); 
}

// 4b. Call the function at least 3 times
//Call the function three times with different food names
printFoodRecommendation("CheeseBurgers");
printFoodRecommendation("Japanese");
printFoodRecommendation("Ice Cream");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
//Loop through the array and print only foods with an "a" in the name
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].includes("a") || friendFavorites[i].includes("A")) {
        console.log(friendFavorites[i]);
    }
} 

// 6. Store the result in an array called foodsWithA. Print out the array.
//Create a new array foodsWithA and store the foods with an "a" in the name and print the array 
let foodsWithA = [];
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].includes("a") || friendFavorites[i].includes("A")) {
        foodsWithA.push(friendFavorites[i]);
    }
} 
console.log(foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
//Create a new array longFoodNames and store the foods with names longer than 6 characters and print the array
let longFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > 6) {
        longFoodNames.push(friendFavorites[i]);
    }
} 
console.log(longFoodNames);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
//Create a new array shortFoodNames and store the foods with names 6 characters or shorter and print the array
let shortFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length <= 6) {
        shortFoodNames.push(friendFavorites[i]);
    }
} 
console.log(shortFoodNames);  

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
// if statements to compare the lengths of the two arrays and print which one has more items
if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (longFoodNames.length < shortFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are an equal number of long-named and short-named foods.");
} 

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
//Loop through the array to find the longest food name and print it with its length
let longestFoodName = "";
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > longestFoodName.length) {
        longestFoodName = friendFavorites[i];
    }
} 
console.log("The longest food name in the list is " + longestFoodName + " with " + longestFoodName.length + " characters.");
