import { productServices } from "../services/productServices.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

productServices.editProduct(id).then((productdata) => {
  inputImageUrl.setAttribute("src", productdata.imageUrl);
  inputNombre.value = productdata.name;
  inputPrecio.value = productdata.price;
  inputDescripcion.value = productdata.description;
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  productoServices
    .alteraProducto(
      id,
      inputNombre.value,
      inputPrecio.value,
      inputDescripcion.value
    )
    .then(() => {
      window.location.href = "../screens/index.html";
    });
});
