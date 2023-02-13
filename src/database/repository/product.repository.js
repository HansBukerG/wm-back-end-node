import { dbClient } from '../dbConnect.database';
import { ReasonPhrases,	StatusCodes, getReasonPhrase, getStatusCode } from 'http-status-codes';

const collection = dbClient.db('promptions').collection('products')

const statusOk = 202;
const statusAccepted = 200;
const statusBadGateway = 503;
const statusNotFound = 404;

const read = async (filter) => {
    let products = []
    let status = 0
    try {
        await dbClient.connect();
        // Establish and verify connection
        const result = await dbClient.db('promotions')
            .collection('promotions')
            .find()
            .sort({id: 1})
            .forEach(product => {
                products.push(product)
            })
        if (products.length != 0) {
            status = StatusCodes.ACCEPTED;
        } else {
            status = StatusCodes.NOT_FOUND
        }
        await dbClient.close();
    } catch (error) {
        status = StatusCodes.BAD_GATEWAY;
        await dbClient.close();
    }

    return { products, status }
};

const readById = async () => {
    let products
    let statusCode
    return { products, statusCode }
};

const readByString = async () => {
    let products
    let statusCode
    return { products, statusCode }
};

export {read,readById,readByString}