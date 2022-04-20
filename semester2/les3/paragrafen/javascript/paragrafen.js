
const setup = () => {
        let paragrafenMetTag = document.getElementsByClassName("belangrijk")
        for (var i = 0; i < paragrafenMetTag.length; i++) {
            paragrafenMetTag[i].classList.add("opvallend")
        }
    }

window.addEventListener("load", setup);