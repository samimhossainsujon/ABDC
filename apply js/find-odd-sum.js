function get_sum_AnArray(number){
    let sum= 0;
    for (i = 0; i<number. length; i++){
        const index=i;
        const element = number[index];
        sum = sum+element;
        // console.log(index, element ,sum);
    }
    return sum;
}


function getOddNumbersOfAnArray(number){
    const oddNumber = [];
    for(let i = 0; i <number.length; i++){
        const index = i;
        const element = number[index];
        if(element % 2 !==0){
            console.log(index, element);
            oddNumber.push(element);
        
        }

        //  else (element%2 !== 0)
        //     console.log(index, element);
        
        
    }
    return oddNumber;
}



const my_number= [12, 15, 150, 152, 165, 170];
const oddNumber =  getOddNumbersOfAnArray(my_number);
console.log(oddNumber);
const oddNumberSum = get_sum_AnArray(oddNumber);
console.log('odd number sum', oddNumberSum);