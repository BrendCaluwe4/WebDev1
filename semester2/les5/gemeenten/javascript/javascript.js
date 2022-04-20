let alleGemeentes = [];
const setup = () => {
    let gemeente = window.prompt("vul gemeente in: ");
    console.log(gemeente);
    if(gemeente === "stop"){

    }
    else
    {
        alleGemeentes.push(gemeente);
        setup();
        console.log(alleGemeentes);
    }

}


window.addEventListener("load", setup);