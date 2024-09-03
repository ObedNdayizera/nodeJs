const Products = require('../models/productModel');

const { getPostData } = require('../utils');

const getProducts = async (req, res) => {
    try {
        const products = await Products.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (req, res, id) => {
    try {
        const product = await Products.findById(id);

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Product Not Found" }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        }

    } catch (error) {
        console.log(error);
    }
}

const createProduct = async (req, res) => {
    try {
        const body = await getPostData(req);

        const { name, description, price } = JSON.parse(body);


        const product = {
            name,
            description,
            price
        }

        const newProduct = await Products.create(product);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newProduct));

    } catch (error) {
        console.log(error);
    }
}



const UpdateProductById = async (req, res, id) => {
    try {
        const product = Products.findById(id);

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Product Not Found" }));
        } else {
            const body = await getPostData(req);

            const { name, description, price } = JSON.parse(body);


            const productData = {
                name: name || product.title,
                description: description || product.description,
                price: price || product.price
            }

            const updProduct = await Products.update(id, productData);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updProduct));

        }

    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getProducts,
    getProductById,
    createProduct,
    UpdateProductById
}