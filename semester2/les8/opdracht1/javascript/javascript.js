let verjaardag = new Date('Februari 17, 1997')
let vandaag = new Date()

let verschil = Math.floor((vandaag - verjaardag)/(24*3600*1000));
console.log(verschil);