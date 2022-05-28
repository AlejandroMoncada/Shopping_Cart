const section = document.querySelector("section");
const body = document.getElementById("body");

window.addEventListener('load', listSelect);

function listSelect() {
  phone.map(element=>{
   createCards(element);
  });
}

function createCards(phone) {
  //destructuring de objetos
  const {id,product, image,price} = phone;
  
  //Creacion de etiqueta div
  const card = document.createElement('article');
    card.classList.add('card');

  const div = document.createElement('div');
    div.classList.add("container-first");

  const div1 = document.createElement('div');
    div1.classList.add("img-card");

  //Creacion de etiqueta img
  const img = document.createElement('img');
    img.setAttribute("src", image);
    img.setAttribute("alt", product);

  //Creacion de etiqueta h1
  const h4 = document.createElement('h4');
    h4.textContent = product;

  const div2 = document.createElement('div');
    div2.classList.add("container-second");

  const p =document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum officia modi quae quis necessitatibus iure libero ducimus natus vero voluptas quas consequuntur eveniet!";

  const priceCard = document.createElement("h4");
    priceCard.textContent = "COP "+price;
    priceCard.style.marginTop = "15px";

  //Creacion de etiqueta button
  const button = document.createElement('button');
    button.setAttribute("id",id);
    button.textContent = "Agregar al carrito";
    button.addEventListener("click", addCart);

//agregamos al main un div y al card todas sus propiedades.
  section.appendChild(card);
  card.appendChild(div);
  div.appendChild(div1);
  div1.appendChild(img);
  div.appendChild(h4);
  card.appendChild(div2);
  div2.appendChild(p);
  div2.appendChild(priceCard);
  div2.appendChild(button);
}