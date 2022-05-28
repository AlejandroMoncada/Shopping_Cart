const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const btnCreateModal = document.getElementById("create-btn");
const modalName = document.getElementById("new-name-modal");
const modalPrice = document.getElementById("new-price-modal");
const modalImage = document.getElementById("upload-image");
const btnCreateCardModal = document.getElementById("btn-create-card");
let imgSelected = " ";


//Eventos de la modal
btnCreateModal.addEventListener("click", showModal);
closeModal.addEventListener("click", modalClose);
btnCreateCardModal.addEventListener("click", addNameModal);
modalImage.addEventListener("change", uploadImage);

function showModal(event) {
  modal.style.display = "flex";
  body.style.background = "##000000a9" 
  
}

function uploadImage(event){
  const img = event.target.files[0];
  const objectURL = URL.createObjectURL(img);
  imgSelected = objectURL;
}

function modalClose(event){
  modal.style.display = "none";
}

function addNameModal(event) {
  modal.style.display = "none"
  
  if(modalName.value && modalPrice.value && modalImage.value){
    const objectOfModals = {
      id: fruits.length + 1,
      product: modalName.value,
      price: modalPrice.value,
      image: imgSelected
    }
    phone.push(objectOfModals);
    selectProducts.innerHTML = "";
    selectProducts.innerHTML = "<option>Select one option</option>";
    listSelect();
  }else{
    alert("Los campos estan vacios");
  }
}