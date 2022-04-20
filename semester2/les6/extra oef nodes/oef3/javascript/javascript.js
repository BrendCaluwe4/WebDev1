const setup = () => {
    let knoppeke = document.querySelector("button");
    knoppeke.addEventListener("click", functie);
}

const functie = () => {
    let p = document.createElement("p");
    let node = document.createTextNode("Dit is een paragraaf");
    p.appendChild(node);
    document.body.appendChild(p);
}

window.addEventListener("load", setup);


