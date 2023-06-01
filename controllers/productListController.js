import { productServices } from "../services/productServices.js";

/* traer listado de productos y separarlos en categorias*/
productServices.allProducts()
  .then((allProducts) => {
    const productByCategory = {};

    allProducts.forEach((product) => {
      const category = product.category;
      productByCategory[category] = productByCategory[category]
        ? [...productByCategory[category], product]
        : [product];
    });
    for (const category in productByCategory) {
      const categoryDiv = generateCategoryDiv(category, productByCategory[category]);
      container.innerHTML += categoryDiv;
    }
    
    console.log(productByCategory);
  })
  .catch((error) => {
    console.log(error);
  });


  const container= document.querySelector("[data-allProducts]");


function generateCategoryDiv(category, products) {
  const productsHTML = products.map((product) => {
    return `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <h1 class="product__name">${product.name}</h1>
        <div class="container column center">
          <div class="product__price"><span class="material-symbols-outlined">
          attach_money
          </span><p>${product.price}</p></div>
          <a class="product__view" href="../product.html?id=${product.id}">Ver Producto</a>
        </div>
      </div>
    `;
  }).join('');
  
  return `
    <section class="products__header">
      <h2 class="products__title">${category}</h2>
      <a href="products.html"><button class="btn btn_l btn_blue">Ver Todo<span class="material-symbols-outlined">arrow_forward</span>
      </button></a>
    </section>
    <section class="products__section">
      ${productsHTML}
    </section>
  `;
}





