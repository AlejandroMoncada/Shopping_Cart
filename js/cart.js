const car = document.querySelector(".modal-cart");
const btnCar = document.getElementById("car");
const closeCart = document.querySelector(".close");
const body1 = document.querySelector(".body");
let result = 1;

btnCar.addEventListener("click", openCar);
closeCart.addEventListener("click",closeCartModal);


function openCar() {
  car.style.display = "block";
  car.style.transition = "all .4s ease-in-out";
  body1.style.backgroundColor = "#8f8e8e96"
}

function closeCartModal(){
  car.style.display = "none";
  body1.style.backgroundColor = "#fff"
}

function addCart(target){
  phone.map(element =>{
  if (target.target.id === element.id) {

  const {id,product, image,price} = phone;

  const contentCart = document.createElement("div");
    contentCart.classList.add("card-of-cart");

  const imageCart = document.createElement('img');
    imageCart.classList.add('img-cart');
    imageCart.setAttribute("src", element.image);
    imageCart.setAttribute("alt", element.product); 

  const descriptionCart = document.createElement("div");
    descriptionCart.classList.add("description-card");  

  const p = document.createElement("p");
    p.textContent = "1"

  const btnMore = document.createElement("button");
    btnMore.classList.add("btn-Moreless");
    btnMore.textContent = "+";

  const btnLess = document.createElement("button");
    btnLess.classList.add("btn-Moreless");
    btnLess.textContent = "-";

  car.appendChild(contentCart);
  contentCart.appendChild(imageCart);
  contentCart.appendChild(descriptionCart);
  descriptionCart.appendChild(p);
  descriptionCart.appendChild(btnMore);
  descriptionCart.appendChild(btnLess);

  
  btnMore.addEventListener("click",event =>{
    console.log("sumando");
    p.textContent = result++;
  })

  btnLess.addEventListener("click",event =>{
    console.log("rest");
    p.textContent = result--;
  })
  }
  })
}