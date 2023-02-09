function getAverage (assinment1, assinment2, assinment3){
    const total = assinment1+assinment2+assinment3;

    const average = total / 3;
    return average;
}


const assinment1mark = 57;
const assinment2mark = 53;
const assinment3mark = 52;

var myAverage = getAverage(assinment1mark,assinment2mark,
    assinment3mark);

    console.log(myAverage);