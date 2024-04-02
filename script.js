'use strict';
/*  json data is from https://api.sampleapis.com/ */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('icedCoffeeBtn').addEventListener('click', function() {
        fetchIcedData('iced.json');
    });
    document.getElementById('hotCoffeeBtn').addEventListener('click', function() {
        fetchHotData('hot.json');
    });
});

function fetchHotData(jsonFile) {
    fetch('https://api.sampleapis.com/coffee/hot')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addDrinks(data);
        });
}

function fetchIcedData(jsonFile) {
    fetch('https://api.sampleapis.com/coffee/iced')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addDrinks(data);
        });
}

function addDrinks(drinks) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    
    drinks.forEach(drink => {
        let article = document.createElement('article');
        article.classList.add('card');

        let img = document.createElement('img');
        img.src = drink.image;
        img.alt = drink.title;

        article.appendChild(img);
        container.appendChild(article);

        let contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        let titleH3 = document.createElement('h3');
        titleH3.textContent = drink.title;

        let descriptionP = document.createElement('p');
        descriptionP.textContent = `${drink.description} Ingredients include:`;

        let ingredientsDiv = document.createElement('div');
        ingredientsDiv.classList.add('ingredients');

        drink.ingredients.forEach(ingredient => {
            let ingredientDiv = document.createElement('div');
            ingredientDiv.textContent = ingredient;
            ingredientDiv.classList.add('ingredient');

            ingredientsDiv.appendChild(ingredientDiv);
        });

        contentDiv.appendChild(titleH3);
        contentDiv.appendChild(descriptionP);
        contentDiv.appendChild(ingredientsDiv);
        article.appendChild(img);
        article.appendChild(contentDiv);
        container.appendChild(article);
    });
}