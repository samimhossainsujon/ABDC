const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3200 },
    { name: 'belt', price: 4200 },
    { name: 'tey', price: 5200 },
    { name: 'under', price: 7200 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum+ product.price;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today:', expense);