
import { Router } from 'express'
import {read, readById } from '../Controllers/Product.Controller.js'
const RouterProduct = Router();

RouterProduct.get('/search/', read);
RouterProduct.get('/search/:id', readById);

export { RouterProduct };
