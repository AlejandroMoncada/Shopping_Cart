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
  
      const objectOfModals = {
      id: "phone-"+phone.length + 1,
      product: modalName.value,
      price: modalPrice.value,
      image: imgSelected
    }
    phone.push(objectOfModals);
    createCards(objectOfModals);
}