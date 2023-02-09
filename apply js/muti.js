// 1* 2* 3* 4* 5* 6* 7* 8* 9* 10


function mutiplicationNumber(number){
    let rusult = 1;
    for(let i =1; i<=number; i++){
        rusult = rusult*i;
        console.log(rusult);

    }
    return rusult;
}

const rusult = mutiplicationNumber(7);


