const checkFilter = (filter) => {
    if (filter.trim().normalize().length == 0) {
        return ''
    }
    return filter.trim();
}

const listData = async(data) => {
    
}

export {checkFilter}