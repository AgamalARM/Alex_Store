const Product = require('../models/product');

const seller_index = (req, res) => {
  Product.find()
  .then((result) =>{
    res.render('seller_index', {blogs: result, title: 'All blogs'});
  })
  .catch((err) => {
    console.log(err);
  });
    // res.render('seller_index', {title: 'Seller'});
    
  }


  module.exports = {
    seller_index
  }