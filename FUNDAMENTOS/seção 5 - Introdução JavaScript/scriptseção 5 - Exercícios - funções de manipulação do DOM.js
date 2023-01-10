//Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos;

function goals() {
    let paragraph = document.getElementsByTagName('p')[1];
    console.log(paragraph);          
    paragraph.innerText = 'Me tornar desenvolvedora!';
}

goals()


function color() {
    let changeColor = document.getElementsByClassName('main-content')[0];
    changeColor.style.background = 'rgb(76,164,109)';
}

color()