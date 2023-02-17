import { StatusCodes } from 'http-status-codes'
import {AddProducts, checkFilter,findProduct,checkPalindrome, checkProduct, applyDiscountToProduct, prepareRequestData} from './utils'

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

        const result = AddProducts(sliceA,sliceB);
        expect(result.length).toBe(resultSlice.length)
    });

    test('checkPalindrome(): Should return true if filter is palindrome',() =>{
        const testData = [
            {filter:'aeiou', result:false},
            {filter:'asddsa', result:true},
            {filter:'asa', result:true},
            {filter:'hola', result:false},
        ]

        for (const datum of testData){
            const result = checkPalindrome(datum.filter)
            expect(result).toBe(datum.result)
        }

    })

    test('checkProduct(): Should return tru if a palindrome is inside of object', ()=> {
        const testData = [
            {product: {id:15,brand:'asdf',description:'asd'}, result:false},
            {product: {id:1,brand:'asdf',description:'asd'}, result:true},
            {product: {id:15,brand:'asddsa',description:'asd'}, result:true},
            {product: {id:15,brand:'asddfsa',description:'asddsa'}, result:true},
            {product: {id:10,brand:'',description:''}, result:true},
        ]

        for (const datum of testData){
            const result = checkProduct(datum.product)
            expect(result).toBe(datum.result)
        }
    })

    test('applyDiscountToProduct(): Should apply a discount to a product', () => {      
        const testData = [
            {product: {id:15,brand:'asdf',description:'asd', price:1000}, result:{id:15,brand:'asdf',description:'asd',price:1000,discount_percentaje: 0, original_price:0 }},
            {product: {id:1,brand:'asdf',description:'asd', price:1000}, result:{id:15,brand:'asdf',description:'asd',price:500,discount_percentaje: 50, original_price:1000 }},
        ]

        for (const datum of testData){
            applyDiscountToProduct(datum.product)
            expect(datum.product.price).toBe(datum.result.price)
        }
    })

    test('prepareRequestData(): Should set discount prices and sort the outpur response', () => {
        const testData = {products: [
            {id:1,brand:'asdf',description:'asd', price:1000},
            {id:15,brand:'asdfdsa',description:'asd', price:1000},
            {id:15,brand:'asdf',description:'asddsa', price:1000},
            {id:15,brand:'asdf',description:'asd', price:1000},
            {id:15,brand:'asdf',description:'asd', price:1000},
        ], status:StatusCodes.ACCEPTED}

        prepareRequestData(testData.products,testData.status)
        testData.products.forEach(product => console.log(product))
    })

})