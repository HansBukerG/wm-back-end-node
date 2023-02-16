import { StatusCodes } from 'http-status-codes';
import { Read,ReadById,ReadByString } from './product.service';

describe('All operations of read should work properly', () =>{
    test('Read(): Should get 10 products by default', async () => {
        const {status} = await Read();
        expect(status).toBe(StatusCodes.ACCEPTED);
    });
    test('ReadById(): Should get one product with 202 ACCEPTED or Empty with 404 NOT_FOUND', async () => {
        const testData = [
            {filter:-20, result:StatusCodes.NOT_FOUND},
            {filter:-15, result:StatusCodes.NOT_FOUND},
            {filter:-1, result:StatusCodes.NOT_FOUND},
            {filter:0, result:StatusCodes.NOT_FOUND},
            {filter:1, result:StatusCodes.ACCEPTED},
            {filter:10, result:StatusCodes.ACCEPTED},
            {filter:15, result:StatusCodes.ACCEPTED},
            {filter:'15', result:StatusCodes.NOT_FOUND},

        ]
        
        for await(const datum of testData){
            const {status} = await ReadById(datum.filter);
            expect(status).toBe(datum.result);
        }

    });
    test('ReadByString(): Should get 10 products by default', async () => {
        const testData = [
            {filter:-20 , result:StatusCodes.NOT_FOUND },
            {filter:-10 , result:StatusCodes.NOT_FOUND },
            {filter:-5 , result:StatusCodes.NOT_FOUND },
            {filter:-0 , result:StatusCodes.NOT_FOUND },
            {filter:'-20' , result:StatusCodes.NOT_FOUND },
            {filter:'-10' , result:StatusCodes.NOT_FOUND },
            {filter:'-15' , result:StatusCodes.NOT_FOUND },
            {filter:'0' , result:StatusCodes.NOT_FOUND },
            {filter: 13321 , result:StatusCodes.NOT_FOUND },
            {filter: 'dsa asdf' , result:StatusCodes.NOT_FOUND },
            {filter: 'asdf ' , result:StatusCodes.NOT_FOUND },
            {filter: ' asdf ' , result:StatusCodes.NOT_FOUND },
            {filter: 1 , result:StatusCodes.ACCEPTED },
            {filter: 10 , result:StatusCodes.ACCEPTED },
            {filter: 15 , result:StatusCodes.ACCEPTED },
            {filter: 20 , result:StatusCodes.ACCEPTED },
            {filter: 'asd' , result:StatusCodes.ACCEPTED },
            {filter: 'asdf' , result:StatusCodes.ACCEPTED },

        ]
        for await (const datum of testData){
            const {status} = await ReadByString(datum.filter);
            expect(status).toBe(datum.result);
        }
    });

    
})