function islep_year(year){
    const remaider = year%4;
    if (remaider ===0){
        console.log('this year leap Year',year)
    } else{
        console.log('year is not leap year', year)
    }
}


 islep_year(1220);