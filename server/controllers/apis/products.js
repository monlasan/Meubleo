const Product = require('../../models/Product');
const crypto = require('crypto');
const path = require('path');
const ErrorResponse = require('../../utils/errorResponse');

exports.getAllProducts = async (req, res, next) => {
  try {
    await Product.find()
      .exec()
      .then((docs) => {
        res.status(200).json(docs);
      })
      .catch((err) => {
        console.log(err);
        return next(new ErrorResponse('No product found...', 404));
      });
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    res.status(200).json('Nothing for now');
    // let prodc = req.user;
    // console.log(user + '-' + req.params.id);
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  console.log(req.files);
  if (req.files === null) {
    return res.status(400).json({
      msg: 'No product added',
    });
  }
  const { productName, productDescription, productPrice, numberInStock } =
    req.body;
  const productImg = req.files.photo;
  productImg.name = crypto.randomBytes(10).toString('hex');
  productImagePath = `uploads/products/${productImg.name}`;
  const pictureURI = `${__dirname}/../../uploads/products/${productImg.name}.jpg`;
  productImg.mv(pictureURI);
  try {
    let newProduct = new Product({
      productName: productName,
      description: productDescription,
      price: productPrice,
      pictureURI: productImagePath,
      quantity: numberInStock,
    });

    await newProduct.save();
    res.status(200).json({
      fileName: productImg.name,
      filePath: `/uploads/products/${productImg.name}`,
    });
  } catch (error) {
    next(error);
  }
};
