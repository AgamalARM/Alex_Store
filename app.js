const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Product = require('./models/product');
const sellerRoutes = require('./routes/sellerRoute');


// express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://user2000:test1234@cluster0.mxsmfkw.mongodb.net/alexstore?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

// listen for requests


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use(morgan('dev'));

// monoose and mongo route
app.get('/add-product', (req,res) => {
  const product = new Product({
    product: 'Smart Laptop',
    description: 'it is 10th Gen CORE i7',
    price: 25000,
    VAT: true,
    shipping: 500,
    total: 25500,
    merchant: 'Dell',
    addToCard: true

  });
  product.save()
   .then((result) => {
    res.send(result);
   })
   .catch((error) =>{
    console.log(error);
   });

      
});

app.get('/all-products', (req,res) => {
  Product.find()
  .then((result) =>{
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
})

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
// seller routes
app.get('/seller', sellerRoutes);

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
