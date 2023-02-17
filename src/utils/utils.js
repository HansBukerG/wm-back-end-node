import { StatusCodes } from "http-status-codes";

const checkFilter = (filter) => {
    if (filter.trim().normalize().length == 0) {
        return ''
    }
    return filter.trim();
}

const AddProducts = (sliceOfProducts, productsToAdd) => {
    if (productsToAdd.length != 0) {
        if (sliceOfProducts.length == 0) {
            sliceOfProducts = productsToAdd;
        }else{
            productsToAdd.forEach(product => {
                if (!findProduct(sliceOfProducts,product)) {
                    sliceOfProducts.push(product)
                }
            });
        }
    }
    return sliceOfProducts;
}

const findProduct = (products, productToFind) => {
    let result = false;
    products.forEach(product => {
        if(product.id == productToFind.id){
            result = true;
        } 
    });
    return result;
}

const checkPalindrome= (filter) => {
    let result = false;
    if (filter == filter.split('').reverse().join('')) {
        result = true
    }
    return result
}

const checkProduct = (product) =>{
    let result = false;
    if (checkPalindrome(product.id.toString())) result = true;
    if (checkPalindrome(product.brand)) result = true;
    if (checkPalindrome(product.description)) result = true;
    return result
}

const applyDiscountToProduct = (product) => {
    if (checkProduct(product)) {
        product.discount_percentaje = 50
        product.original_price = product.price
        product.price = product.price / 2
    }else{
        product.discount_percentaje = 0
        product.original_price = 0
    }
}

const prepareRequestData = (products, resStatus) => {
    if (resStatus == StatusCodes.ACCEPTED) {
        products.forEach(product => {
            applyDiscountToProduct(product) 
          });
        
    }
}

export {checkFilter,
    findProduct,
     AddProducts, 
     checkPalindrome,
     checkProduct,
     applyDiscountToProduct,
     prepareRequestData
    }