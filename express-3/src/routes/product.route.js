const productHandler = require('../handlers/product.handler');
const express = require('express');
const router = express.Router();

router.get('/', productHandler.getProducts);
router.get('/:id', productHandler.getProductById);
router.post('/', productHandler.createProducts);
router.put('/:id', productHandler.updateProduct);
router.delete('/:id', productHandler.deleteProduct);

module.exports = router;