const meals = document.getElementById('meals');

getRandomMeal();

async function getRandomMeal(){
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const responseData = await response.json();
    const randomMeal = responseData.meals[0];
    console.log(randomMeal);
    addMeal(rabdonMeal, true);
}

async function getMealById(id){
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}

async function getMealBySearch(term){
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+term);
}

addMeal(mealData, random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = 
    <div class="meal">
        <div class="meal-header">
            <span class="random">
                Random Recipe
            </span>
            <img src="https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg" alt=""/>
        </div>
        <div class="meal-body">
            <h4>Veggies</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"> </i>
            </button>
        </div>
    </div>
}