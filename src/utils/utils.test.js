import {AddProducts, checkFilter,findProduct} from './utils'

describe('All test from utils should pass', () => {
    test('checkFilter() should return words without spaces', () => {
        const testData = [
            {filter:'hello', result: 'hello'},
            {filter:'hello ', result: 'hello'},
            {filter:' hell o ', result: 'hell o'},
            {filter:'', result: ''},
            {filter:' ', result: ''},
        ]
        testData.forEach(element => {
            expect(checkFilter(element.filter)).toBe(element.result)
        })
    })

    test('FindProduct(): Should return true when a id is already in the list', ()=>{
        const product = {id:10}
        const testData = [
            { products: [{id:0},{id:5}] , result:false},
            { products: [{id:0},{id:10},{id:5}] , result:true},
            { products: [{id:10},{id:2}] , result:true},
            { products: [{id:1},{id:10}] , result:true},
        ]
        let result
        for (const datum of testData){
            result = findProduct(datum.products,product)
            expect(result).toBe(datum.result)
        }
    });

    test('AddProducts(): Should add a slice of products to another slice', async () => {
        const sliceA = [
            {id:10},
            {id:15},
            {id:20},
            {id:30},
            {id:40},
        ]
        const sliceB = [
            {id:10},
            {id:11},
            {id:12},
            {id:15},
            {id:20},
            {id:30},
            {id:40},
            {id:50},
            {id:60},
        ]
        const resultSlice = [
            {id:10},
            {id:11},
            {id:12},
            {id:15},
            {id:20},
            {id:30},
            {id:40},
            {id:50},
            {id:60},
        ]

        const result = await AddProducts(sliceA,sliceB);
        console.log('result slice:');
        console.log(result);
    });
})