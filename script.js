const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOff('quebrada') > -1;
}
function lampOn() { //comentario
    lamp.src = 'ligada.jpg';
}
function lampOff() {
    lamp.src ='desligada.jpg';
}
function lampBroken() {
   lamp.src ='quebrada.jpg';
}
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('dblclick', lampBroken);

