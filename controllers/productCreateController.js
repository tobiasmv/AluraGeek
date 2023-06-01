import { productServices } from "../services/productServices.js" ; 





const form    = document.querySelector("[data-form")
form.addEventListener("submit", (e) => {
    e.preventDefault();

const ImgUrl= document.querySelector("[data-imageUrl").value
const category     = document.querySelector("[data-cat").value
const name    = document.querySelector("[data-name").value
const price   = document.querySelector("[data-price").value
const description   = document.querySelector("[data-description").value

  productServices.createProduct( name,ImgUrl ,price,  category, description )
    .then((response) => {
      window.location.href = "../screens/index.html";
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
