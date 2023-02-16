const checkFilter = (filter) => {
    if (filter.trim().normalize().length == 0) {
        return ''
    }
    return filter.trim();
}

const AddProducts = async(sliceOfProducts, productsToAdd) => {
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

export {checkFilter,findProduct, AddProducts}