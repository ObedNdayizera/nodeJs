const http = require('http');

const { getProducts, getProductById, createProduct, UpdateProductById, removeProductById } = require('./controllers/productController');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'GET') {
        let id = req.url.split('/')[3];
        getProductById(req, res, id);
    } else if (req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res);
    } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
        let id = req.url.split('/')[3];
        UpdateProductById(req, res, id);
    } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
        let id = req.url.split('/')[3];
        removeProductById(req, res, id);
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





// else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
//     const id = req.url.split('/')[3];
//     updateProduct(req, res, id);
// }