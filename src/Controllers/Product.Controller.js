import {Read,ReadById,ReadByString} from '../services/product.service.js' 

const read = async (request,response) =>{
   console.log('Incoming request for read()');
   const {products , status} = await Read();

   const jsonContent = JSON.stringify(products);
   response.setHeader("Content-Type", "application/json");
   response.status(status)
   response.send(jsonContent);
}

const readById = async (request, response) => {
  console.log('Incoming request for readById()')
  const filter = parseInt(request.params.id) 
  const {products , status} = await ReadById(filter)
  const jsonContent = JSON.stringify(products);
  response.setHeader("Content-Type", "application/json");
  response.status(status)
  response.send(jsonContent);
}

const readByString = async (request, response) => {
  console.log('Incoming request for readByString()');
  // const filter = 
  // try {
  //   console.log(`Incoming request for readByString(${request.params.id})`);
  //   const responseData = {
  //       id: request.params.id       
  //   }
      
  //   const jsonContent = JSON.stringify(responseData);
  //   response.setHeader("Content-Type", "application/json");
  //   response.status(202)
  //   response.send(jsonContent);
  //   next();
  // } catch (error) {
  // }

}

export {read, readById, readByString};