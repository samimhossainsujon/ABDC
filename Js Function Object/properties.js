var shopingItems =['books', 'sunglass', 'Keyboard', 
'mouse', 'pen', 'shoes'];


var shopingCard = {
    books : 3,
    sunglass:1,
    Keyboard:5,
    mouse: 1,
    pen:25,
    shoes:2

}

    const keys = Object.keys(shopingCard);
    console.log(keys);

    const values = Object.values(shopingCard);
    console.log(values);

    for(var i =0; i < keys.length; i++){
     var propertyName = keys[i];
     var propertyValue = shopingCard[propertyName];
     console.log(propertyName,propertyValue);
        
    }

    for(var propertyName in shopingCard){
        const value = shopingCard[propertyName];
        console.log(propertyName);
    }

