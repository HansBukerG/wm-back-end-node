import { StatusCodes } from 'http-status-codes';
import {Read,ReadById,ReadByString} from '../services/product.service.js' 
import { AddProducts, prepareRequestData } from '../utils/utils.js';

const read = async (request,response) =>{
  console.log('Incoming request for read()');
  const {products , status} = await Read();

  prepareRequestData(products,status)
  products.sort((p1, p2) => (p1.discount_percentaje < p2.discount_percentaje) ? 1 : (p1.discount_percentaje > p2.discount_percentaje) ? -1 : 0) 

  const jsonContent = JSON.stringify(products);
  response.setHeader("Content-Type", "application/json");
  response.status(status)
  response.send(jsonContent);
}

const readById = async (request, response) => {
  console.log('Incoming request for readById()')
  const filter = parseInt(request.params.id) 
  const {products , status} = await ReadById(filter)

  prepareRequestData(products,status)
  products.sort((p1, p2) => (p1.discount_percentaje < p2.discount_percentaje) ? 1 : (p1.discount_percentaje > p2.discount_percentaje) ? -1 : 0) 

  const jsonContent = JSON.stringify(products);
  response.setHeader("Content-Type", "application/json");
  response.status(status)
  response.send(jsonContent);
}

const readByString = async (request,response) => {
  console.log('Incoming request for readByString()');
  const arrfillter = request.params.id.toLowerCase().trim().split(' ')
  let resProducts = []
  let resStatus = StatusCodes.NOT_FOUND

  for (const filter of arrfillter){
    console.log('caling func with: ', filter);
    const{products, status} = await ReadByString(filter)
    if (status == StatusCodes.ACCEPTED) {
      resProducts = AddProducts(resProducts,products)
      resStatus = StatusCodes.ACCEPTED
    }
  }

  prepareRequestData(resProducts, resStatus)
  resProducts.sort((p1, p2) => (p1.discount_percentaje < p2.discount_percentaje) ? 1 : (p1.discount_percentaje > p2.discount_percentaje) ? -1 : 0) 

  const jsonContent = JSON.stringify(resProducts);
  response.setHeader("Content-Type", "application/json");
  response.status(resStatus)
  response.send(jsonContent);
} 

export {read, readById, readByString};