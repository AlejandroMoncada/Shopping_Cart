const car = document.querySelector(".modal-cart");
const btnCar = document.getElementById("car");
const closeCart = document.querySelector(".close-cart");
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
   
    result = 1;
  const contentCart = document.createElement("div");
    contentCart.classList.add("card-of-cart");

  const imageCart = document.createElement('img');
    imageCart.classList.add('img-cart');
    imageCart.setAttribute("src", element.image);
    imageCart.setAttribute("alt", element.product); 

  const divTitleAndPrice = document.createElement("div");
    divTitleAndPrice.classList.add();

  const h2title = document.createElement("h2");
    h2title.textContent = element.product;
    h2title.style.fontSize = "1rem";
    h2title.style.margin = "5px";

  const h3Price = document.createElement("h3");
    h3Price.style.fontSize = "1rem";
    h3Price.style.margin = "15px 5px";
    h3Price.textContent = "COP "+element.price;

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
  
  const del = document.createElement("button");
    del.classList.add("btn-close-card-cart")
    del.textContent = "Borrar";
    

    // if (h2title.textContent === element.product ){+
    //   console.log("Estoy en el iff");
    //   car.innerHTML = "";
    //   p.textContent = result++;
    //   }

   
  car.appendChild(contentCart);
  contentCart.appendChild(imageCart);
  contentCart.appendChild(divTitleAndPrice);
  contentCart.appendChild(descriptionCart);
  divTitleAndPrice.appendChild(h2title);
  divTitleAndPrice.appendChild(h3Price);
  descriptionCart.appendChild(p);
  descriptionCart.appendChild(btnMore);
  descriptionCart.appendChild(btnLess);
  descriptionCart.appendChild(del);

  const btncloseCart = document.getElementById("close-cart-btn");
    btncloseCart.addEventListener("click",event =>{
      alert("COMPRA REALIZADA")
      contentCart.style.display = "none";
      car.innerHTML = "";
      body1.style.backgroundColor = "#fff"
      const div11 = document.createElement("div");
        div11.classList.add("nav-cart");
      const div12 = document.createElement("div");
        div12.classList.add("close-cart");
      const div13 = document.createElement("div");
        div13.classList.add("btn-close-cart");
        div13.textContent = "X";
      const button0 = document.createElement("button");
        button0.style.margin = "10px";
        button0.textContent = "Comprar";
        button0.setAttribute("id","close-cart-btn");
      
  
      car.appendChild(div11);
      div11.appendChild(div12);
      div12.appendChild(div13);
      div11.appendChild(button0);
      
      div12.addEventListener("click",closeCartModal);


      
    })

  
  btnMore.addEventListener("click",event =>{
    p.textContent = result++;
    h3Price.textContent = "COP "+(element.price + element.price);
    console.log("a");
  })

  btnLess.addEventListener("click",event =>{
    p.textContent = result--;
    h3Price.textContent = "COP "+(element.price - element.price);
  })
  del.addEventListener("click",event =>{
    contentCart.style.display = "none";
  })

  }
  })
  
}
