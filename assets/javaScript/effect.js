let d = 0;
let typ = "Soy estudiante Full-stack de JavaScript en desafio latam...";
let text = document.querySelector('.text');
let typing = () => {
    if( d < typ.length) {
        text.innerHTML += typ.charAt(d);
        d ++;
        setTimeout(typing, 100)
    }
}
typing();

let html = document.querySelector('.html');
html.onmouseover = function() {
    html.classList.add ('active');
    
}

let css = document.querySelector('.css');
css.onmouseover = function() {
    css.classList.add ('active');
}

let js = document.querySelector('.js');
js.onmouseover = function() {
    js.classList.add ('active');
}

let react = document.querySelector('.react');
react.onmouseover = function() {
    react.classList.add ('active');
}


let db = document.querySelector('.db');
db.onmouseover = function() {
    db.classList.add ('active');
}


let node = document.querySelector('.node');
node.onmouseover = function() {
    node.classList.add ('active');
}

let menu = document.querySelector('.men');
let toggle = document.querySelector('.toggle');
let knowledge = document.querySelector('.knowledge');
toggle.onclick = function() {
    toggle.classList.toggle ('active');
    menu.classList.toggle ('active');
    knowledge.classList.toggle('active');
    secondTyping();
    thirdTyping();
    fourthTyping();
    sixTyping();
}


let firstItem = document.querySelector('.mG');
let secondItem = document.querySelector('.iP');
let thirdItem = document.querySelector('.fA');
let fourthItem = document.querySelector('.aDM');
let fiveItem = document.querySelector('.C');

let firstText = 'Mi GitHub';
let secondText = 'Chocolate store';
let thirdText = 'Finland Agency';
let fiveText = 'Contacto';

let e = 0;
let f = 0;
let g = 0;
let i = 0;

let secondTyping = () => {
    if( e < firstText.length) {
        firstItem.innerHTML += firstText.charAt(e);
        e ++;
        setTimeout(secondTyping, 100)
    }
}

let thirdTyping = () => {
    if( f < secondText.length) {
        secondItem.innerHTML += secondText.charAt(f);
        f ++;
        setTimeout(thirdTyping, 100)
    }
}

let fourthTyping = () => {
    if( g < thirdText.length) {
        thirdItem.innerHTML += thirdText.charAt(g);
        g ++;
        setTimeout(fourthTyping, 100)
    }
}


let sixTyping = () => {
    if( i < fiveText.length) {
        fiveItem.innerHTML += fiveText.charAt(i);
        i ++;
        setTimeout(sixTyping, 200);
    }
}

let contacto = document.querySelector('.C');
let aboutMe = document.querySelector('.aboutMe');
contacto.onclick = function() { 
    aboutMe.classList.toggle('active');
    toggle.classList.toggle('active')
}

let back = document.querySelector('.back')
back.onclick = function() {
    back.classList.toggle('active');
    aboutMe.classList.toggle('active');
    menu.classList.toggle('active');


}

