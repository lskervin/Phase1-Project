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
    const drinkImg = document.querySelector('.detail-image');
    const drinkName = document.querySelector('.name');
    const drinkInfo = document.querySelector('#instructions');
    const drinkIngredients = document.querySelector('#ingredients');
    const drinkMeasurments = document.querySelector('#measurments');
    const drinkListContainer = document.querySelector('#drink-grid-container');
    const drinkList = document.createElement('div');
    drinkImg.src = drink.strDrinkThumb;
    drinkImg.alt = drink.strDrink;
    drinkName.textContent = drink.strDrink;
    drinkInfo.value = drink.strInstructions ;
    drinkIngredients.value = drink.strIngredient1 +', ' + drink.strIngredient2 + ', ' + drink.strIngredient3 + ', ' + drink.strIngredient4
    drinkMeasurments.value = drink.strMeasure1 +', ' + drink.strMeasure2 + ', ' + drink.strMeasure3 + ', ' + drink.strMeasure4
    drinkList.textContent = drink.strDrink;
    drinkList.className = "grid-item"
    drinkListContainer.append(drinkList)
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
