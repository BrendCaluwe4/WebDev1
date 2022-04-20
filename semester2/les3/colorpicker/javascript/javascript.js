const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	//sliders[0].addEventListener("change", update);
	//sliders[0].addEventListener("input", update);

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
	    sliders[i].addEventListener("input", update);
    }
    colorDemos[0].style.backgroundColor="rgb(" + 125 + "," + 125 + "," + 125 + ")";
}

const update = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	
    //Red
    let valueRed = sliders[0].value/100*255;
    //Green
    let valueGreen = sliders[1].value/100*255;
    //Blue
    let valueBlue = sliders[2].value/100*255;

    console.log("de waarde van de slider is momenteel : "+ valueRed +","+ valueGreen +"," +valueBlue);
    colorDemos[0].style.backgroundColor="rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";

   
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);