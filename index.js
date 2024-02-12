function dataFetch() {
    fetch('http://localhost:3000/drinks')
      .then((response) => response.json())
      .then((response) => { 
        Array.from(response).forEach((drink)=> {
        console.log(drink);
        displayDrinks(drink);
      });
});
};

const displayDrinks = (drink) => {
    const drinkImg = document.querySelector('.detail-image');
    const drinkName = document.querySelector('.name');
    const drinkInfo = document.querySelector('#ingredients-and-instructions');
    const drinkListContainer = document.querySelector('#drink-grid-container')
    const drinkList = document.createElement('div')
    drinkImg.src = drink.strDrinkThumb;
    drinkImg.alt = drink.strDrink;
    drinkName.textContent = drink.strDrink;
    drinkInfo.value = drink.strInstructions ;
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