import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  return res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  return res.json(products);
});

app.get('/api/product/:id', (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  return res.json(product);
});

app.listen(port, () => console.log(`server is running on ${port}`));
