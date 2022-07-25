const express = require('express');
const productRouter = require('./routes/product.route');
const server = express();
server.use(express.json());

const port = 8080;

server.use('/api/products', productRouter);
server.listen(port, () => console.log(`Server listening on port ${port}... 👍`));
