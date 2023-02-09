const phones = [
    { name: 'Sumsung', camera: 12, storage: '21GB', price: 10000, color: 'silver' },
    { name: 'Walton', camera: 12, storage: '21GB', price: 210000, color: 'silver' },
    { name: 'Iphone', camera: 12, storage: '21GB', price: 2310000, color: 'silver' },
    { name: 'Xaomi', camera: 12, storage: '21GB', price: 2410000, color: 'silver' },
    { name: 'Oppo', camera: 12, storage: '21GB', price: 2510000, color: 'silver' },
    { name: 'Nokia', camera: 12, storage: '21GB', price: 2610000, color: 'silver' },
    { name: 'HTC', camera: 12, storage: '21GB', price: 5000, color: 'silver' },
];



function cheapestPhon(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phon = phones[i];
        // console.log(phon);
        if (phon.price < cheapest.price) {
            cheapest = phon;
        }

    }
    return cheapest;
}

const mySelection = cheapestPhon(phones);
console.log(mySelection);