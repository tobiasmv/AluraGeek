//GET obtener datos del json-server , READ del CRUD

const allProducts = () =>
fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .catch((error) => console.log(error));

  const editProduct = (id) => fetch(`http://localhost:3000/producto/${id}`).then((response) => response.json()).catch((error) => console.log(error));

//POST enviar datos al json-server , CREATE del CRUD

const createProduct = ( name, ImgUrl ,price,category, description ) => {
  return fetch(`http://localhost:3000/products`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      ImgUrl,
      price,
      id: uuid.v4(),
      category,
      description,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.body;
    }
    throw new Error("No se a creado el producto");
  });
};

// PUT/PATCH actualizar datos del json-server , UPDATE del del CRUD
const updateProduct = async (id, name, price, description) => {
  return fetch(`http://localhost:3000/product/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};


export const productServices = {
  allProducts,
  createProduct,updateProduct,editProduct,
  };