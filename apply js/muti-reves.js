// function factorial (number){
//     let result = 1;
//     for(let i=number; i>=1; i--){
//         result = result*i;
//         console.log(i)
//     }

//     return result;
     
// }

// const number= 8;
// const fact= factorial (number);
// console.log('factorial of:', number, fact);


// function while loop codding
function factorial (number){
    let  i =number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;

        console.log(i);
        console.log(result);
    }

    return result;
}


const output = factorial(10);

