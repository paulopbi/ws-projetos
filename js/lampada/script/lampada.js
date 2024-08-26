// Consts 
const turnOn = document.getElementById ('turnOn');

const turnOff = document.getElementById ('turnOff');

const lamp = document.getElementById ('lamp');

// Functions

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

// Event Listeners

turnOn.addEventListener ( 'click', lampOn);

lamp.addEventListener ('mouseover', lampOn);

turnOff.addEventListener ('click', lampOff);

lamp.addEventListener ('mouseleave', lampOff); 

lamp.addEventListener ('dblclick', lampBroken);






