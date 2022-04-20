 const setup = () => {   
    let items = document.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        items[i].className = 'listitem';
     }
    
     let Pic = document.createElement('img');
     Pic.src = '../pics/foto1.jpg'
     document.body.appendChild(Pic);
}

window.addEventListener("load", setup);