const express = require('express');
const router = express.Router();
const {getProducts, createProduct, deleteProduct, updateProduct} = require('../controllers/productsController'); // Asegúrate de que la ruta sea correcta

// Rutas de productos
router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;