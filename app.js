const form = document.querySelector('form');
const result = document.querySelector('.search_results');
const Sbtn = document.querySelector('.btnSearch');

Sbtn.addEventListener('click', () => {
	let input = document.querySelector('input').value;
	let myResults = '';
	// alert(input);
	FetchItem(input);
	input = '';
});

async function FetchItem(input) {
	const api = `https://api.edamam.com/search?q=${input}&app_id=afb0356d&app_key=38dbb855a99a5cb115ff8b6867d8352f&to=20`;
	var res = await fetch(api);
	var data = await res.json();
	let items = data.hits;
	// console.log(items);
	let itemDiv = '';
	items.map((item) => {
		itemDiv += `
        
            <div class="item">
                <img src="${item.recipe.image}" alt="" />
                <div class="title">
                    <h6>${item.recipe.label}</h6>
                    <button class="btn" ><a href="${
											item.recipe.url
										} target='__blank'">View Recipe</a></button>
                </div>
                <p>Calorries :${item.recipe.calories.toFixed(2)}</p>
                <p>DietLables:${item.recipe.dietLabels}</p>
                <p>DishType :${item.recipe.dishType}</p>
            </div>
                
                `;
	});
	result.innerHTML = itemDiv;
}
// FetchItem();
