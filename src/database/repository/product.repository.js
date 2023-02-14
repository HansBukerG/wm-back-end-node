import { database, dbClient } from '../dbConnect.database';
import { ReasonPhrases,	StatusCodes, getReasonPhrase, getStatusCode } from 'http-status-codes';

const collection = dbClient.db('promptions').collection('products')
const projection = {
    id:1,
    brand:'',
    description:'',
    image: '',
    price: 1
}

//This is the default read operation, it will return 10 products from the collection
const read = async () => {
    let products = []
    let status = 0
    const query = {}
    const sort = {id: 1}
    const limit = 10
    try {
        await dbClient.connect();
        const result = await dbClient.db(database)
            .collection('products')
            .find(query)
            .project(projection)
            .sort(sort)
            .limit(limit)
            // .forEach(product => products.push(product))
        for await (const product of result){
            if (result.length !== 0) {
                products.push(product)
            }
        }
        if (products.length != 0) {
            status = StatusCodes.ACCEPTED;
        } else {
            status = StatusCodes.NOT_FOUND
        }
    } catch (error) {
        status = StatusCodes.BAD_GATEWAY;
    } finally {
        await dbClient.close();
    }
    return { products, status }
};

const readById = async (filter) => {
    let products = []
    let status = 0
    const query = {id:filter}
    const sort = {id: 1}
    try {
        await dbClient.connect();
        const result = await dbClient.db(database).collection('products').find(query)
        for await(const product of result){
            products.push(product)
        }
        if (products.length !== 0) {
            status = StatusCodes.ACCEPTED
        } else {
            status = StatusCodes.NOT_FOUND
        }
    } catch (error) {
        status = StatusCodes.BAD_GATEWAY
    } finally{
        await dbClient.close()
    }
    return { products, status }
};

const readByString = async () => {
    let products
    let statusCode
    return { products, status }
};



export {read,readById,readByString}