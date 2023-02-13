import {checkFilter} from './utils'

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
})