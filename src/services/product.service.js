import {read,readById,readByString} from '../database/repository/product.repository.js'

const Read = async () => {
    const {products , status} = await read();
    return {products , status} 
}

const ReadById = async (filter) =>{
    const {products , status} = await readById(filter);
    return {products , status} 
}

const ReadByString = async (filter) =>{

    // const arrfillter = request.params.id.toLowerCase().trim().split(' ')

    const {products , status} = await readByString(filter);

    return {products , status} 
}

export { Read,ReadById,ReadByString }