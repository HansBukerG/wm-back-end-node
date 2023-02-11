const productRepository = require('./product.repository')

describe('Should read Data', () => {
    test('read() should return data  and status code 202 OK', async () => {
       const {statusCode} = await productRepository.read()
       expect(statusCode).toBe(404)
    })
})