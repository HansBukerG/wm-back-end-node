import { StatusCodes } from 'http-status-codes';
import {read,readById,readByString} from './product.repository';

describe('All read operations should receive status 202 ACCEPTED', () => {
    test('read() should receive 202 ACCEPTED', async () => {
        const { status } = await read();
        expect(status).toBe(StatusCodes.ACCEPTED)
    });

    test('readById(): Should receive expected data',async()=>{
        const testData = [
            {filter: 0, result:StatusCodes.NOT_FOUND},
            {filter: 5000, result:StatusCodes.NOT_FOUND},
            {filter: 'asdsa', result:StatusCodes.NOT_FOUND},
            {filter: '', result:StatusCodes.NOT_FOUND},
            {filter: 1, result:StatusCodes.ACCEPTED},
            {filter: 10, result:StatusCodes.ACCEPTED},
            {filter: 20, result:StatusCodes.ACCEPTED},
        ]

        for await (const datum of testData){
            const { status } = await readById(datum.filter)
            expect( status ).toBe(datum.result)
        }
    })

    test('readByString(): Should receive 202 ACCEPTED', async() => {
        const testData = [
            {filter: 0, result:StatusCodes.NOT_FOUND},
            {filter: 15, result:StatusCodes.ACCEPTED},
            {filter: 'asdf', result:StatusCodes.ACCEPTED},
            {filter: 'qrñfsf', result:StatusCodes.ACCEPTED},
        ]
        for await (const datum of testData){
            const { status } = await readByString(datum.filter)
            expect( status ).toBe(datum.result)
        }
    })
})