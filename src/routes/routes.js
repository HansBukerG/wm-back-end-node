
import { Router } from 'express'
import { readById,readByString } from '../Controllers/Product.Controller.js'
const RouterProduct = Router();

RouterProduct.get('/search/', readById);
RouterProduct.get('/search/:id', readByString);

export { RouterProduct };
