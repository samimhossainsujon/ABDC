const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'Agun' };
const friend = [13, 14, 11, 17, 21, 16, 15, 20];


function add(num1, num2) {
    return num1 + num2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// check array using array.isArray
console.log(Array.isArray(friend));
console.log(typeof add);


// ========================
console.log(friend.includes(19));
console.log(friend.includes(21));


if (friend.indexOf(19) !== -1) {

}


//  concat:

const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friend);
console.log(allFriends);




