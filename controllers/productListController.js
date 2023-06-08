import { productServices } from "../services/productServices.js";

const container = document.querySelector("[data-Products]");


productServices
	.allProducts()
	.then((allProducts) => {
		const productByCategory = {};

		allProducts.forEach((product) => {

			const category = product.category;
			productByCategory[category] = productByCategory[category]
				? [...productByCategory[category], product]
				: [product];
		});

		for (const category in productByCategory) {
			const categoryDiv = generateCategoryDiv(
				category,
				productByCategory[category]
			);
			const divElement = document.createElement("div");
			divElement.innerHTML = categoryDiv;
			container.appendChild(divElement);
		}

		console.log(productByCategory);
	})
	.catch((error) => {
		console.log(error);
	});

function generateCategoryDiv(category, products) {
	const productsHTML = products
		.map((product) => {
			const { id, name, ImgUrl, price} = product;
			return `<div class="product__card">
    <div class="product__img">
      <img src="${ImgUrl}" alt="${name}">
    </div>
    <div class="product__data">
      <h2 class="data__title">${name}</h2>
      <h2 class="flex row centered"><span class="material-symbols-outlined price">attach_money</span>${price}</h2>
      <a href="product.html?id=${id}" class="link-blue"><button class="btn" data-buttonView >ver producto</button></a>
    </div>
  </div>
  `;
		})
		.join("");

	return `
    <div class="products__title">
      <h2 class="products__category-title">${category}</h2>
      <a class="blue_anchor" href="all_products.html">
        <button class="btn btn_l flex row centered">Ver Todo 
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </a>
    </div>
    <div class="products__container">
      ${productsHTML}
    </div>
  `;
}
const buttonView = document.querySelectorAll("[data-buttonView]");
buttonView.forEach((buttonView) => {
  buttonView.addEventListener('click', (event) => {
	const productId = editBtn.dataset.id;
	const editUrl = new URL('../screens/edit_product.html', window.location.href);
	editUrl.searchParams.append('id', productId);
	window.open(editUrl.href, '_blank');
  });
});














  /*  const editBtn = document.querySelectorAll('[data-type="edit"]');
    editBtn.forEach((editBtn) => {
      editBtn.addEventListener('click', () => {
        const productId = editBtn.dataset.id;
        const editUrl = new URL('../screens/edit_product.html', window.location.href);
        editUrl.searchParams.append('id', productId);
        window.open(editUrl.href, '_blank');
      });
    });
  }) */