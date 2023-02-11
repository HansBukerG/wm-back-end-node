const productService = require('./product.service')
// import productService from 'product.service.js ';

describe('Should get all reads OK', () =>{
    

    test('Should code receive 202 status OK', async () => {
        expect.assertions(1)
        const { code } = await productService.read()
        expect(code).toBe(202);
    })
})