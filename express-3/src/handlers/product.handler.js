const products = require('../products');

const productHandler = {
    getProducts,
    getProductById,
    createProducts,
    updateProduct,
    deleteProduct
}

module.exports = productHandler;

function getProducts(_req, res) {
    res.status(200).send(products);
}

function getProductById(req, res) {
    const id = Number(req.params.id);
    if (!id) return res.status(400).send('ID cannot be empty and begins at 1');

    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).send('Product not found');

    res.status(200).send(product);
}

function createProducts(req, res) {
    const { products: newProducts } = req.body;
    if (!newProducts || !newProducts.length) return res.status(400).send('Body must include at least one product');

    let maxId = products.reduce((acc, curr) => Math.max(acc, curr.id), 1);

    const indexedNewProducts = newProducts.map(product => {
        if (!product.name || !product.price) return null;

        product.id = ++maxId;
        return product;
    }).filter(p => p);

    let response;
    if (indexedNewProducts.length !== newProducts.length) {
        response = {
            message: 'Some products were discarded because information was missing',
            created: indexedNewProducts,
        }
    } else {
        response = {
            message: 'Created',
            created: indexedNewProducts,
        }
    }

    products.push(...indexedNewProducts);
    res.status(201).send(response);
}

function updateProduct(req, res) {
    const id = Number(req.params.id);
    const { body } = req;
    if (!id || !body) return res.status(400).send('ID and Body cannot be empty');

    let indexToUpdate;
    const productToUpdate = products.find((p, index) => {
        if (p.id === id) {
            indexToUpdate = index;
            return true
        } else return false
    });
    if (!productToUpdate) return res.status(404).send('Product not found');

    for (property in productToUpdate) {
        if (property !== 'id' && body[property]) {
            productToUpdate[property] = body[property];
        }
    }

    products[indexToUpdate] = productToUpdate;
    res.status(200).send(productToUpdate);
}

function deleteProduct(req, res) {
    const id = Number(req.params.id);
    if (!id) return res.status(400).send('ID cannot be empty and begins at 1');

    let indexToDelete;
    const productToDelete = products.find((p, index) => {
        if (p.id === id) {
            indexToDelete = index;
            return true
        } else return false
    });
    if (!productToDelete) return res.status(404).send('Product not found');

    products.splice(indexToDelete, 1);
    res.status(204).end();
}
