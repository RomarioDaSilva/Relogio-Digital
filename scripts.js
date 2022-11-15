const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const horaNewYork = document.getElementById('newYourk')
const horadubai = document.getElementById('dubai')
const horacancun = document.getElementById('cancun')
const horalisboa = document.getElementById('lisboa')

const relogio = setInterval(function time(){
    let data = new Date();

    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (seg < 10) seg = '0' + seg

    let newYork = (hr - 2) + ':' + min + ':' + seg;
    let dubai = (hr + 7) + ':' + min + ':' + seg;
    let cancun = (hr - 2) + ':' + min + ':' + seg;
    let lisboa = (hr + 3) + ':' + min + ':' + seg;


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    horaNewYork.textContent = newYork;
    horadubai.textContent = dubai;
    horacancun.textContent = cancun;
    horalisboa.textContent = lisboa;
    
    
})