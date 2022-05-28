const filterSelect = document.getElementById("selectFilter");

filterSelect.addEventListener('change', filterProducts);

function filterProducts(event) {
  const filterResponse = event.target.value === "Menores a 2"
  ? fruits.filter( fruit => fruit.price < 2)
  : event.target.value === 'Entre 2 y 4'
  ? fruits.filter( fruit => fruit.price >= 2 && fruit.price <= 4)
  : event.target.value === 'Mayores a 4'
  ? fruits.filter( fruit => fruit.price > 4)
  : event.target.value === 'select'
  ? fruits.filter( fruit => fruit.price < 0)
  : null;


  mainCards.innerHTML = '';
  filterResponse.map(fruit => createCards(fruit));
}



// condition ? true : false