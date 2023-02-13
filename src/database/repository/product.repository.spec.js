import { ReasonPhrases,	StatusCodes, getReasonPhrase, getStatusCode } from 'http-status-codes';
import {read,readById,readByString} from './product.repository'

describe('All read operations should receive status 202 ACCEPTED', () => {

    test('read() should receive 202 ACCEPTED', async () => {
        let datatest = [
            {filter: 'hello', statusCode:StatusCodes.ACCEPTED},
        ]
        
        datatest.forEach(async(element) => {
            let { products, status } = await read(element.filter);

            products.forEach(product => console.log(product));
            expect(status).toBe(element.statusCode)
        });

        // const { status } = await read();
        // expect(status).toBe(StatusCodes.ACCEPTED)
    });
})