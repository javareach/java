'use strict'

// ex1

const numberOfSeries  = +prompt('Nechta serial ko’rdingiz')
console.log(numberOfSeries);




const seriesDB = {
    count:numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    privat:false,
}
console.log(seriesDB);




for(let i = 0; i < 2; i++){
    const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
    const b = prompt('Necha baxo berasiz', '')  

    seriesDB.series[a] = b
}



console.log(seriesDB)








// const thief = {
//     jacket:'black',
// }

// const property = 'age'
// const value = 30

// thief[property] = value
// console.log(thief);

