const dataFetch = () => {
    fetch('http://localhost:3000/drinks')
      .then((response) => response.json())
      .then((drinks) => { 
        drinks.forEach((drink)=> {
          displayDrinks(drink);
        });
    });
};

const filterCategories = () => {
    // Select the <ul> element containing the category buttons
    const categoryList = document.getElementById('drink-options');
    
    // Attach click event listeners to each category button
    categoryList.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            // Get the category associated with the clicked button
            const category = button.textContent.trim();
            
            // Select all drink list items
            const drinkListItems = document.querySelectorAll('.grid-item');
            
            // Loop through each drink list item
            drinkListItems.forEach(item => {
                // Check if the item's category matches the clicked category
                if (item.dataset.strCategory === category) {
                    // Display the item if it matches
                    item.style.display = 'block';
                } else {
                    // Hide the item if it doesn't match
                    item.style.display = 'none';
                }
            });
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

const filterLetters = () => {
    // Select all buttons in the letter options container
    const letterButtons = document.querySelectorAll('#letter-options button');

    // Loop through each button and attach click event listener
    letterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the letter associated with the clicked button
            const letter = button.textContent;
            
            // Select all drink list items
            const drinkListItems = document.querySelectorAll('.grid-item');
            
            // Loop through each drink list item
            drinkListItems.forEach(item => {
                // Check if the text content of the item starts with the clicked letter
                if (item.textContent.trim().toUpperCase().startsWith(letter)) {
                    // Display the item if it matches
                    item.style.display = 'block';
                } else {
                    // Hide the item if it doesn't match
                    item.style.display = 'none';
                }
            });
        });
    });
};

const h1 = document.querySelector('h1');

// Add event listener for mouseover
h1.addEventListener('mouseover', () => {
    // Change background color when mouse hovers over the box
    h1.style.backgroundColor = '#28282B';
});

// Add event listener for mouseout (optional)
h1.addEventListener('mouseout', ()=> {
    // Restore original background color when mouse leaves the box
    h1.style.backgroundColor = '';
});


const toggleButton = () =>
  document.getElementById('toggle-form').addEventListener('click', function() {
    const form = document.getElementById('new-drink');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });


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
});


dataFetch();
filterLetters();
filterCategories();
toggleButton();
