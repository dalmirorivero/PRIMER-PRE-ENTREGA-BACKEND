    // IMPORTACIONES
    import express from 'express';
    import productsRouter from './routes/products.router.js';
    import cartsRouter from './routes/carts.router.js';
    // INICIALIZA EXPRESS
    const app = express ();
    // CONFIGURACION DEL SERVIDOR PARA ESCUCHAR EN EL PUERTO 8080
    app.listen(8080, () => console.log('Server up and running on port :8080 👾'));
    // MIDDLEWARE
    app.use(express.json());
    app.use(express.urlencoded ({extended: true}));
    app.use('/api/products', productsRouter);       //END POINT SOLICITADO POR CONSIGNA
    app.use('/api/carts', cartsRouter);             //END POINT SOLICITADO POR CONSIGNA