// function dataFetch() {
//     fetch('http://localhost:3000/drinks')
//       .then((response) => response.json())
//       .then((response) => { 
//         Array.from(response).forEach((drink)=> {
//         filterCategories(drink);
//         displayDrinks(drink);
//       });
// });
// };

// const displayDrinks = (drink) => {
//     const drinkImg = document.querySelector('.detail-image');
//     const drinkName = document.querySelector('.name');
//     const drinkInfo = document.querySelector('#instructions');
//     const drinkIngredients = document.querySelector('#ingredients');
//     const drinkMeasurments = document.querySelector('#measurments');
//     const drinkListContainer = document.querySelector('#drink-grid-container');
//     const drinkList = document.createElement('div');
//     drinkImg.src = drink.strDrinkThumb;
//     drinkImg.alt = drink.strDrink;
//     drinkName.textContent = drink.strDrink;
//     drinkInfo.value = drink.strInstructions ;
//     drinkIngredients.value = drink.strIngredient1 +', ' + drink.strIngredient2 + ', ' + drink.strIngredient3 + ', ' + drink.strIngredient4
//     drinkMeasurments.value = drink.strMeasure1 +', ' + drink.strMeasure2 + ', ' + drink.strMeasure3 + ', ' + drink.strMeasure4
//     drinkList.textContent = drink.strDrink;
//     drinkList.className = "grid-item"
//     drinkListContainer.append(drinkList)




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
    
    // drinkList.appendChild(drinkImg);
    drinkList.appendChild(drinkName);
    // drinkList.appendChild(drinkInfo);
    // drinkList.appendChild(drinkIngredients);
    // drinkList.appendChild(drinkMeasurments);
    
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


const toggleButton = () =>
  document.getElementById('toggle-form').addEventListener('click', function() {
    const form = document.getElementById('new-drink');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });

dataFetch();
filterLetters();
filterCategories();
toggleButton();