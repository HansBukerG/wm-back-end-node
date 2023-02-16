
import { Router } from 'express'
import {read, readById, readByString } from '../Controllers/Product.Controller.js'
const RouterProduct = Router();

RouterProduct.get('/search/', read);
RouterProduct.get('/search/:id', readByString);
RouterProduct.get('/search/id/:id', readById);

export { RouterProduct };
