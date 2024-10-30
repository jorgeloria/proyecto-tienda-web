const ProductService = {
  async getProducts() {
    try {
      //TODO(Any) Cambia la URL por por una var en archivo de config
      const response = await fetch("http://localhost:3001/product/getProducts");
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }

      const products = await response.json();
      return products;
    } catch (error) {
      console.error("Error en getProducts:", error);
      throw error;
    }
  },

  async getProductById(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/product/getProductById/${id}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener producto");
      }

      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Error en getProductById:", error);
      throw error;
    }
  },
};
export default ProductService;
