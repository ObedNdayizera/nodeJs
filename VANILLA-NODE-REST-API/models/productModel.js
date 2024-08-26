const products = require('../data/products');
const { v4: uuidv4 } = require('uuid');


const findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(p => p.id === id);
        resolve(product);
    })
}

const create = (id) => {
    return new Promise((resolve, reject) => {

    })
}


module.exports = {
    findAll,
    findById
}