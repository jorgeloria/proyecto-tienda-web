const ProductService = {
	async getProducts() {
		try {
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
};
export default ProductService;  