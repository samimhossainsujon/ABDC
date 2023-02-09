// const Myinches = 84;
// const myFeet = Myinches/12;
// console.log(myFeet);


function inch_To_Feet(inches){
    const feet = inches/ 12;
    return feet;
}

const dadaInches =144;
const dadaFeet = inch_To_Feet(dadaInches);
console.log(dadaFeet);