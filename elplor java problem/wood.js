function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
   const perChairWood = 3;
   const perTableWood = 10;
   const perBedWood = 50;


   const ChairWood = chairQuantity * perChairWood;
   const TableWood = tableQuantity * perTableWood;
   const BedWood = bedQuantity * perBedWood;


   const totalWood = ChairWood + TableWood + BedWood;
   return totalWood;
}

const totalWood = woodCalculator(1, 1, 1);
console.log(totalWood); 