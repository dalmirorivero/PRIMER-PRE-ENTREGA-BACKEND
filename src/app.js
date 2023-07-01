import express from 'express';
const app = express();
app.listen(8080, () => console.log('Server up and running on port :8080'));

import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
