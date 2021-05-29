const ages = [12,14,16,20];
const ages2 = [13,15,17,21];
const ages3 = [25,22,24,30]
const allAges = ages.concat(ages2);
const allAges2 = allAges.concat(ages3);
const allAges3 = [...ages,...ages2,...ages3,5];
//console.log(allAges3);

const tkPoisha = [220,330,550,770];
const maximum = Math.max(...tkPoisha);
console.log(maximum);