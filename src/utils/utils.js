export const editProduct = (products, id, productData) => {
  const updatedProducts = products.map(product => {
    if (product.sNo === id) {
      return productData;
    } else {
      return product;
    }
  });
  return updatedProducts;
};

export const deleteProduct = async (products, id) => {
  console.log(id)
  const updatedProducts = await products.filter(product => product.sNo !== id);
  console.log(updatedProducts)
  return updatedProducts;
};
