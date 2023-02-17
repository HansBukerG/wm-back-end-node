import { StatusCodes } from 'http-status-codes';
import {Read,ReadById,ReadByString} from '../services/product.service.js' 
import { AddProducts, applyDiscountToProduct } from '../utils/utils.js';

const read = async (request,response) =>{
  console.log('Incoming request for read()');
  const {products , status} = await Read();

  let productsRes= products
  productsRes.forEach(product => {
  product = applyDiscountToProduct(product) 
  });

  productsRes = productsRes.sort(
  (p1, p2) => (p1.discount_percentaje < p2.discount_percentaje) ? 1 : (p1.discount_percentaje > p2.discount_percentaje) ? -1 : 0
  ) 

  const jsonContent = JSON.stringify(productsRes);
  response.setHeader("Content-Type", "application/json");
  response.status(status)
  response.send(jsonContent);
}

const readById = async (request, response) => {
  console.log('Incoming request for readById()')
  const filter = parseInt(request.params.id) 
  const {products , status} = await ReadById(filter)

  let productsRes= products
  productsRes.forEach(product => {
    product = applyDiscountToProduct(product) 
  }); 
  
  productsRes = productsRes.sort( 
    (p1, p2) => (p1.discount_percentaje < p2.discount_percentaje) ? 1 : (p1.discount_percentaje > p2.discount_percentaje) ? -1 : 0
  )
  const jsonContent = JSON.stringify(productsRes);
  response.setHeader("Content-Type", "application/json");
  response.status(status)
  response.send(jsonContent);
}

const readByString = async (request,response) => {
  console.log('Incoming request for readByString()');
  const arrfillter = request.params.id.toLowerCase().trim().split(' ')
  let resProducts = []
  let resStatus = 0

  for (const filter of arrfillter){
    console.log('caling func with: ', filter);
    const{products, status} = await ReadByString(filter)
    resProducts = AddProducts(resProducts,products) 
  }

  resProducts.forEach(product => {
    product = applyDiscountToProduct(product) 
  });
  
  resProducts = resProducts.sort(
    (p1, p2) => (p1.discount_percentaje < p2.discount_percentaje) ? 1 : (p1.discount_percentaje > p2.discount_percentaje) ? -1 : 0
  )
  // resProducts = resProducts.sort(
  //   (p1, p2) => (p1.id < p2.id) ? 1 : (p1.id > p2.id) ? -1 : 0
  // )
  const jsonContent = JSON.stringify(resProducts);
  response.setHeader("Content-Type", "application/json");
  response.status(StatusCodes.ACCEPTED)
  response.send(jsonContent);
} 

export {read, readById, readByString};