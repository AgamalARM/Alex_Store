const express = require('express');
const sellerController = require('../controllers/sellerController');

const router = express.Router();

router.get('/seller', sellerController.seller_index);
// router.get('/create', sellerController.blog_create_get);
// router.get('/', sellerController.blog_index);
// router.post('/', sellerController.blog_create_post);
// router.get('/:id', sellerController.blog_details);
// router.delete('/:id', sellerController.blog_delete);

module.exports = router;