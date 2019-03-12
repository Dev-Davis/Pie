const pie = [
    {
        name: 'Dutch Apple Pie',
        ingredients: 'apples, sugar, butter, nutmeg, dutch people',
        bakeTemp: 5000,
        drinkPairing: 'Earl Grey Tea',
        imageUrl: 'https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg',
        instructor: 'Zoe',
        iceCream: 'Vanilla'
    },
    {
        name: 'Berry Pie',
        ingredients: 'berries',
        bakeTemp: 5000,
        drinkPairing: 'wine',
        imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/808f7319-ed9b-41c7-8d35-959d83c868e8.jpg',
        instructor: 'Zoe',
        iceCream: 'Banana'
    },
    {
        name: 'test1'
    },
    {
        name: 'test2'
    },
    {
        name: 'test3'
    }
];

const printToDom = (divId, textToPrint) => {
    selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const makeApie = () => {

    let pieChoice = '';
    pie.forEach((pie) => {
        console.log(pie);
        pieChoice += `<h2>${pie.name}</h2>`
    });
    printToDom('sweetPie', pieChoice);
}
//     for (let i = 0; i < pie.length; i++) {
//         pieChoice += `<div class="piez">`;
//         pieChoice += `<h1>${pie[i].name}</h1>`;
//         // pieChoice += `<p>${pie[i].ingredients}</p>`;
//         // pieChoice += `<p>${pie[i].bakeTemp}</p>`;
//         // pieChoice += `<p>${pie[i].drinkPairing}</p>`;
//         // pieChoice += `<p>${pie[i].imageUrl}</p>`;
//         // pieChoice += `<p>${pie[i].instructor}</p>`;
//         // pieChoice += `<p>${pie[i].iceCream}</p>`;
//         pieChoice += `</div>`
//     }
//     printToDom('sweetPie', pieChoice);
// }



init = () => {
    makeApie();
};
init();
