let personen = [];
let indexTest = 0;
bestaat = false;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    console.log("bestaat = " + bestaat);
    valideer();
    nieuwePersoon();
};


const nieuwePersoon = () => {
    if (!bestaat) {
        let nieuw = {
            txtVoornaam: document.getElementById("txtVoornaam"),
            voornaam: txtVoornaam.value.trim(),
            
            txtFamilienaam: document.getElementById("txtFamilienaam"),
            familienaam: txtFamilienaam.value.trim(),
    
            txtGeboorteDatum: document.getElementById("txtGeboorteDatum"),
            geboorteDatum: txtGeboorteDatum.value.trim(),
    
            txtEmail: document.getElementById("txtEmail"),
            email: txtEmail.value.trim(),
    
            txtAantalKinderen: document.getElementById("txtAantalKinderen"),
            aantalKinderenText: txtAantalKinderen.value.trim(),
        }
        personen.push(nieuw);
    
        let text = document.createElement("option");
        let node = document.createTextNode(nieuw.voornaam + "  " +nieuw.familienaam);
        text.appendChild(node);
        document.getElementById("lstPersonen").appendChild(text);
    }
    else{
        bestaandePersoon(indexTest);
    }    
}


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    form = document.querySelector("form");
    let optie = document.getElementById('lstPersonen');
    optie.selectedIndex = -1;
    form.reset();
    bestaat = false;
    
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const editPersoon = () => {
    let optie = document.getElementById('lstPersonen');
    let options = optie.options;
    indexTest = optie.selectedIndex;

    bestaat = true;

    console.log("index is: " + indexTest)
    showgegevens(indexTest);
}

const bestaandePersoon = (i) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    personen[i].voornaam = txtVoornaam.value.trim();

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    personen[i].familienaam = txtFamilienaam.value.trim();

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    personen[i].geboorteDatum = txtGeboorteDatum.value.trim();

    let txtEmail = document.getElementById("txtEmail");
    personen[i].email = txtEmail.value.trim();

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    personen[i].aantalKinderenText = txtAantalKinderen.value.trim();
    
    let node = document.createTextNode(personen[i].voornaam + "  " + personen[i].familienaam);    

    let lijst = document.getElementById('lstPersonen');
    let options = lijst.options;
    let selected = options[lijst.selectedIndex];
    selected.removeChild(selected.firstChild);
    selected.appendChild(node);

}   

const showgegevens= (i) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    txtVoornaam.value = personen[i].voornaam;

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    txtFamilienaam.value = personen[i].familienaam;

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    txtGeboorteDatum.value = personen[i].geboorteDatum;

    let txtEmail = document.getElementById("txtEmail");
    txtEmail.value = personen[i].email;

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtAantalKinderen.value = personen[i].aantalKinderenText;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let opties = document.getElementById('lstPersonen');
    opties.addEventListener("change", editPersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);