const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
    let knoppeke = document.querySelector("button");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
	    sliders[i].addEventListener("input", update);
    }

    let kleur = [sliders[0].value, sliders[1].value,sliders[2].value]
    knoppeke.addEventListener("click", ()=>save(kleur[0],kleur[1],kleur[2]));
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

const save=(red,green,blue)=> {
    let picker = document.createElement('section');
    picker.classList.add("colorDemo");
    picker.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"

    document.body.appendChild(picker);

}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);