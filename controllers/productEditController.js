import { productServices } from "../services/productServices.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');// obtener identificador de producto de la url generada 



const productContainer = document.querySelector("[data-ProductView]");//contenedor de producto

//acceso al dom , datos del producto a visualizar
const imgContainer = document.querySelector("[data-ImgView]");
const nameContainer = document.querySelector("[data-ProdName]");
const priceContainer = document.querySelector("[data-ProdPrice]");
const descriptionContainer = document.querySelector("[data-ProdDesc]");

//acceso al formulario
//acceso al dom , datos del producto a visualizar
const updateForm= document.querySelector("[data-UpdateForm]");
const inputImg = document.querySelector("[data-UpdateImg]");
const inputName = document.querySelector("[data-UpdateName]");
const inputPrice = document.querySelector("[data-UpdatePrice]")
const inputDescription = document.querySelector("[data-UpdateDescription]");

productServices.listProduct(productId)
  .then((product) => {
    
    inputName.value = product.name;
    inputImg.value = product.ImgUrl;
    inputPrice.value = product.price;
    inputDescription.value = product.description;
    let productCard = `
      <div class="product__view">
        <div class="product__img-description">
          <img src="${product.ImgUrl}" alt="${product.name}" data-ImgView>
        </div>

        <div class="product__data">
          <h2 class="product__data-title" data-ProdName>${product.name}</h2>
          <div class="flex row centered">
            <span class="material-symbols-outlined price">attach_money</span>
            <h2 class="product__data-price"data-ProdPrice>${product.price}</h2>
          </div>
          <p class="product__data-description"data-ProdDesc>${product.description}</p>
        </div>
      </div>
    `;
    productContainer.innerHTML=productCard;

   
   })
  .catch((error) => {
    console.log(error);
    console.log('Failed to fetch product details. Please try again.');
  });

  updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    await productServices.updateProduct(
      productId,
      inputImg.value,
      inputName.value,
      inputPrice.value,
      inputDescription.value
    );
  
    window.location.href = "../screens/index.html";
  });
  
 
