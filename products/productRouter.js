const express = require('express');
const router = express.Router();
const productController = require('../products/productController.js')

router.get('/remove/:id', productController.removeProduct);

router.get('/', productController.getListProductQueryParam);
router.get('/:expore', productController.getListProductQueryParam);




//router.get('/:expore', productController.showUpdateProduct)
//router.get('/', productController.showAddProduct);
//router.post('/', productController.addNewProduct);

// router.post('/', productController.showUpdateProduct);

module.exports = router;