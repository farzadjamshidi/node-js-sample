import productService from '../services/product.service.js';

export const getProducts = async (req, res) => {
  try {
    const products = await productService.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getProductById = async (req, res) => {
    try {
        const product = await productService.findById(req.params.id);
        if (product == null) {
        return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}