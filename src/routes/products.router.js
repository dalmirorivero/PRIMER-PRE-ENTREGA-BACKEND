import { Router } from 'express';
import ProductManager from '../manager/ProductManager.js';

const router = Router();
export default router;

const productManager = new ProductManager('./files/products.json');

router.get ('/', async(req, res) => {
    const products = await productManager.getProducts();
    res.send({ status: 'succes', products });
});

router.get('/:pid', async(req, res) => {
    const productid = Number(req.params.pid)
    const product = await productManager.getProductById(productid);
    if (!product){
        res.send({Error: 'ID Inexistente!'});
    }else {
    res.send(product);}
});

router.post ('/', async(req,res) => {
const product = req.body;
if (!product.status){
    products.status = true;
}

if (!product.title || !product.description || !product.code || !product.price || !product.category || !product.stock){
    return res.status(400).send({error: 'valores incompletos'})
}
    const result = await productManager.save(product)
    res.send({ status: 'success', result})

});

router.put('/:pid', (req, res) => {

});

router.delete('/:pid', (req, res) => {

});