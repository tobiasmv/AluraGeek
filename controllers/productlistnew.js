import { productServices } from "../services/productServices.js";

const container = document.querySelector("[data-allProducts]");

productServices
  .allProducts()
  .then((allProducts) => {
    allProducts.forEach((product) => {
      const { id, name, imgUrl, price, description } = product;
      const productDiv = document.createElement('div');
      productDiv.classList.add('product__card');
      productDiv.innerHTML = `
        <div class="product__img">
          <img src="${imgUrl}" alt="${name}">
          <div class="icon__container">
            <button class="btn btn_xs" data-id="${id}" data-type="edit">
              <span class="material-symbols-outlined white">edit</span>
            </button>
            <button class="btn btn_xs" data-id="${id}" data-type="delete">
              <span class="material-symbols-outlined white">delete</span>
            </button>
          </div>
        </div>
        <div class="card__data">
          <h2 class="card__title">${name}</h2>
          <h2>Precio: ${price}</h2>
          <a href="product${id}.html" class="blue_anchor">
            <button class="btn">ver producto</button>
          </a>
          <p data-description>${description}</p>
        </div>
      `;

      container.appendChild(productDiv);
    });

    const deleteBtns = document.querySelectorAll('[data-type="delete"]');
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', () => {
        const productId = deleteBtn.dataset.id;
        const productCard = deleteBtn.closest('.product__card');
        productCard.remove();

        productServices.productDelete(productId)
          .then(() => {
            alert('Producto eliminado correctamente');
          })
          .catch((error) => {
            alert('Error al eliminar el producto', error);
          });
      });
    });

    const editBtn = document.querySelectorAll('[data-type="edit"]');
    editBtn.forEach((editBtn) => {
      editBtn.addEventListener('click', () => {
        const productId = editBtn.dataset.id;
        const editUrl = new URL('../screens/edit_product.html', window.location.href);
        editUrl.searchParams.append('id', productId);
        window.open(editUrl.href, '_blank');
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
