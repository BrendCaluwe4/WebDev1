let array = [];
const storeSliderValues = (red, green, blue) => {
    //slaag de sliders op
    let sliders = {
        r: red,
        g: green,
        b: blue
    }
    let stringed = JSON.stringify(sliders);
    localStorage.setItem("sliders", stringed);
};

const restoreSliderValues = () => {
    //haal de sliders uit de localstorage
    let sliders = localStorage.getItem("sliders");
    let unstringed = JSON.parse(sliders);

    //pas de sliders aan en update
    if(unstringed !== null){
        document.getElementById("sldRed").value = unstringed.r;
        document.getElementById("sldGreen").value = unstringed.g;
        document.getElementById("sldBlue").value = unstringed.b;
        update();
    }
};

const storeSwatch = (red, green, blue) => {
    //slaag de swatch op in array
    let swatch = {
        r: red,
        g: green,
        b: blue
        }
   array.push(swatch);

   //slaag de swatch op in localstorage
   let stringed = JSON.stringify(array);
   localStorage.setItem("array", stringed);
};

const removeSwatch = (swatch) => {
    //reformat de kleuren voor gemakkelijk vergelijken
    let kleur = swatch.style.backgroundColor;
    kleur = kleur.substring(4, kleur.length-1).trim();
    kleur = kleur.split(",");

    let picked = 
    {
        r: kleur[0],
        g: kleur[1],
        b: kleur[2]
    }

    //Zoek in array een swatch met dezelfde rgb waarden
    for (let index = 0; index < array.length; index++) {
        let arrayRgb = array[index];
        
        //vergelijk de gekozen swatch met de array en delete als je hem tegenkomt
        if(picked.r == arrayRgb.r && picked.g == " " + arrayRgb.g && picked.b == " " + arrayRgb.b){
            array.splice(index,1);
            
            //delete hem ook uit de localstorage
            let stringed = JSON.stringify(array);
            localStorage.setItem("array", stringed);
        }
    }
};

const restoreSwatches = () => {
   let stringed = localStorage.getItem("array");
   if(stringed !== null){
   let arrayTest = JSON.parse(stringed);

for (let index = 0; index < arrayTest.length; index++) {
    let swatch = arrayTest[index];
    array.push(swatch);
    addSwatchComponent(swatch.r, swatch.g, swatch.b)
}
}
};
