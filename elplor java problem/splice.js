const friends = [12, 14, 20, 55, 54, 78, 79, 82, 88, 82, 82];

// removes elements from an array 
// and if necessary inserts new elements in their place
// returning thr deleted elements 
// will change the original array 

// const partial = friends.splice(3, 7, (মান যোগ করার নিয়ম));
const partial = friends.splice(3, 7, 50, 1050, 500);

console.log(partial);
console.log(friends);