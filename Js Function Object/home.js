function minInArray (numbers){
    let smallest = numbers[0];
    for (i = 0;  i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
      
        if(element < smallest){
            smallest = element;
        }
     }
    return smallest;
}


const short = [167, 190, 120, 165, 137];
const smallest = minInArray (short);
console.log(smallest);

// const number = -78; 
// const answer = Math.abs(number); 
// console.log(answer);