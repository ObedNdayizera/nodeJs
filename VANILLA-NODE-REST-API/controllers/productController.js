const Products = require('../models/productModel');

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
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        })

        req.on('end', async () => {
            const { name, description, price } = JSON.parse(body);


            const product = {
                name,
                description,
                price
            }

            const newProduct = await Products.create(product);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newProduct));
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct
}