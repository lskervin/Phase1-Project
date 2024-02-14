function dataFetch() {
    fetch('http://localhost:3000/drinks')
      .then((response) => response.json())
      .then((response) => { 
        Array.from(response).forEach((drink)=> {
        console.log(`${drink.strIngredient1}`);
        console.log(`${drink.strIngredient2}`);
        console.log(`${drink.strIngredient3}`);
        console.log(`${drink.strIngredient4}`);
        console.log(`${drink.strMeasure1}`);
        console.log(`${drink.strMeasure2}`);
        console.log(`${drink.strMeasure3}`);
        console.log(`${drink.strMeasure4}`);
        displayDrinks(drink);
        // console.log(`{drink}++`)
      });
});
};

const displayDrinks = (drink) => {
  const ingredientsInstructionsDiv = document.querySelector(".ingredients-and-instructions")
  const drinkImg = document.querySelector("#drink-display img");
  const drinkName = document.createElement('h3');
  const drinkInfo = ingredientsInstructionsDiv.querySelector("#instructions");
  const drinkIngredients = ingredientsInstructionsDiv.querySelector("#ingredients");
  const drinkMeasurments = ingredientsInstructionsDiv.querySelector("#measurments");
  const drinkListContainer = document.querySelector('#drink-grid-container');
  const drinkList = document.createElement('div');
  const drinkNameDisplay = document.querySelector(".name");
  
  
  drinkImg.src = drink.strDrinkThumb;
  drinkImg.alt = drink.strDrink;
  drinkName.textContent = drink.strDrink;
  drinkInfo.value = drink.strInstructions;
  drinkIngredients.value = `${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}, ${drink.strIngredient4}`;
  drinkMeasurments.value = `${drink.strMeasure1}, ${drink.strMeasure2}, ${drink.strMeasure3}, ${drink.strMeasure4}`;
  drinkNameDisplay.textContent = drink.strDrink;
  

  drinkList.appendChild(drinkName);

  
  drinkList.className = "grid-item";
  drinkList.dataset.strCategory = drink.strCategory;
  
  drinkListContainer.appendChild(drinkList);

  drinkList.addEventListener('click', () => {
      const drinkName = document.querySelector('.name');
      drinkName.textContent = drink.strDrink;
      drinkImg.src = drink.strDrinkThumb;
      drinkImg.alt = drink.strDrink;
      drinkInfo.value = drink.strInstructions;
      drinkIngredients.value = `${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}, ${drink.strIngredient4}`;
      drinkMeasurments.value = `${drink.strMeasure1}, ${drink.strMeasure2}, ${drink.strMeasure3}, ${drink.strMeasure4}`;

  
  });
};



const toggleButton = () =>
document.getElementById('toggle-form').addEventListener('click', function() {
    const form = document.getElementById('new-drink');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
}
});



// const toggleButtonMenu = () =>
// document.getElementById('toggle-drink').addEventListener('click', function() {
//     const form = document.getElementById('drink-grid-container');
//     if (form.style.display === 'none') {
//       form.style.display = 'block';
//     } else {
//       form.style.display = 'none';
// }
// });

// toggleButtonMenu();
toggleButton();
dataFetch();

/*<form id="new-drink">
  <label for="drink-name">Drink Name:</label>
  <input type="text" id="drink-name" name="drink-name" required>
  <label for="category">Category:</label>
  <input type="text" id="category" name="category">
  <input type="submit" id="submit-button" value="Submit">
</form>


  const form = document.getElementById('new-drink');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const drinkNameInput = document.getElementById('drink-name');
    const drinkNameValue = drinkNameInput.value;

    console.log(drinkNameValue);
</form>
  });
  <form id="new-drink">
  <label for="drink-name">Drink Name:</label>
  <input type="text" id="drink-name" name="drink-name" required>
  <label for="category">Category:</label>
  <input type="text" id="category" name="category">
  <input type="submit" id="submit-button" value="Submit">
</form>
*/
const addSubmitListener = (event) => {
  event.preventDefault();
  let newDrink = {
    idDrink:  '',
    strDrink: event.target[0].value,
    strCategory: event.target[1].value,
    strAlcoholic: event.target[2].value,
    strGlass: event.target[3].value,
    strInstructions: event.target[4].value,
    strInstructionsDE:'',
    strInstructionsIT:'',
    strDrinkThumb: event.target[5].value,
    strIngredient1: event.target[6].value,
    strIngredient2: event.target[7].value,
    strIngredient3: event.target[8].value,
    strIngredient4: event.target[9].value,
    strMeasure1: event.target[10].value,
    strMeasure2: event.target[11].value,
    strCreativeCommonsConfirmed:'',
    dateModified:''
  };
  fetch('http://localhost:3000/drinks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newDrink)
  })
  .then(response => {
    if (response.status === 201) {
      return response.json()
    }
  })
  .then((data) => {
const drinkFormName = document.getElementById('new-drink');  
const drinkNameInput = document.getElementById('drink-name');
const categoryInput = document.getElementById('category');
const glassInput = document.getElementById('glass-type')
const instructionsInput =document.getElementById('instructions')
const drinkThumbInput = document.getElementById('new-image')
const ingredient1Input = document.getElementById('ingredient-One')
const ingredient2Input = document.getElementById('ingredient-two')
const ingredient3Input = document.getElementById('ingredient-three')
const Ingredient4Input = document.getElementById('ingredient-four')
const measure1Input = document.getElementById('Mesurment-One')
const measure2Input = document.getElementById('Mesurment-two')
const measure3Input = document.getElementById('Mesurment-three')
const measure4Input = document.getElementById('Mesurment-four')

drinkNameInput.value  = newDrink.strDrink
categoryInput.value  = newDrink.strCategory
glassInput.value  = newDrink.strGlass
instructionsInput.value = newDrink.strInstructions
drinkThumbInput.value  = newDrink.strDrinkThumb
ingredient1Input.value  = newDrink.strIngredient1
ingredient2Input.value  = newDrink.strIngredient2
ingredient3Input.value  = newDrink.strIngredient3
Ingredient4Input.value  = newDrink.strIngredient4
measure1Input.value  = newDrink.strMeasure1
measure2Input.value  = newDrink.strMeasure2
measure3Input.value  = newDrink.strMeasure3
measure4Input.value  = newDrink.strMeasure4
})
};
const form = document.getElementById('new-drink');

form.addEventListener('submit', (event) =>{
  addSubmitListener(event);
  dataFetch();

      // Create an object to hold the form data


    // Send the form data to the server
  })
  
