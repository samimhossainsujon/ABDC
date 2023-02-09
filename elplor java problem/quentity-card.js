const shoppingCart = [
    { name: 'shoe', price: 1200,  quantity: 2},
    { name: 'shirt', price: 2200,  quantity: 3},
    { name: 'pant', price: 3200,  quantity: 4},
    { name: 'belt', price: 4200,  quantity: 5},
    { name: 'tey', price: 5200 , quantity: 6},
    { name: 'under', price: 7200, quantity: 7 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;

        sum = sum+ productTotal;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today:', expense);