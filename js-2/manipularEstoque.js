let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

//1
let id = 1;
console.log('Produtos:'); 
for (const product of products) {
    product.id = id++;

//2
    console.log('\t- ', product.name);
}

//3
const terceiro = products.find(p => p.id === 3);
console.log('\nProduto de ID 3:');
console.log('\t', terceiro);

//4
const pretos = products.filter(p => p.colors.includes('black'));
console.log('\nProdutos disponíveis na cor preta:');
console.log(pretos);

//5
const semCor = products.filter(p => !p.colors.length);
console.log('\nProdutos sem cor definida:');
console.log(semCor);
