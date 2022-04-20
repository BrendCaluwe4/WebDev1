
//spatie console
const spatie = () => {
    let zin = document.getElementById("input").value.replace(/\s/g,'');
    let spatieZin = "";
    for (let i = 0; i < zin.length; i++) {
        spatieZin = spatieZin + " " + zin[i];
    } 
    console.log(spatieZin);
    }

const spatie2 = (zin) => {
    let spatieZin = "";
    for (let i = 0; i < zin.length; i++) {
        spatieZin = spatieZin + " " + zin[i];
    } 
    console.log(spatieZin);
    }

const slaagOP = () => {
    let zin = document.getElementById("input").value.replace(/\s/g,'');
    spatie2(zin);
}

//opdracht types
let leeftijd = 34;
let intrest = 0.12;
let isGevaarlijk=true;
let vandaag = new Date();


console.log("leeftijd: "+ typeof leeftijd); 
console.log("intrest: "+typeof intrest);
console.log("isGevaarlijk: "+typeof isGevaarlijk);
console.log("vandaag: "+typeof vandaag);

let button = document.getElementById("button");
button.addEventListener("click", ()=> slaagOP());


