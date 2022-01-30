const express = require('express');
const router = express.Router();
// const { protect } = require('../../middleware/auth');
const {
  getAllProducts,
  getProduct,
  addProduct,
} = require('../../controllers/apis/products');

router.route('/').get(getAllProducts);
router.route('/:id').get(getProduct);
router.route('/').post(addProduct);

module.exports = router;
