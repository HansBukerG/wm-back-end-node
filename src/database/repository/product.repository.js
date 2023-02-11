const client = require('../dbConnect.database')
const collection = client.db('promptions').collection('products')

const productRepository = {
    read: async () => {
        let products = ''
        let statusCode = 404
            
        return { products, statusCode }
    },
    readById: async () => {
        let products
        let statusCode


        return { products, statusCode }
    },
    readByString: async () => {
        let products
        let statusCode


        return { products, statusCode }
    }
}

module.exports = productRepository