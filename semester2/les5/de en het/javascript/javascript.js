let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
let outputTekst = "";


while (true) {
    let index = tekst.indexOf("de");

    if(index == -1){
        break;
    }

    outputTekst += tekst.slice(0,index) + "het";
    tekst = tekst.slice(index + 2);

}

console.log(outputTekst + tekst) ;
