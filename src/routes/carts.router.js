import { Router } from 'express';
import CartManager from '../manager/CartManager.js'

const router = Router();
export default router;

const cartManager = new CartManager('./files/carts.json');

router.post('/', async(req, res) => {
const cart = { products: []}
const result = await cartManager.saveCart(cart);
res.send({status: 'success', result});
});

router.get('/:cid', async(req, res) => {
const cartid = number(req.params.cidid);
const cart = await cartManager.getCartById(cartid);
if (!cart) {
    return res.status(404).send({error: 'cart not found'});
}
res.send({ status: 'success', cart });
});

router.post('/:cid/product/:pid', async(req, res) => {

});


