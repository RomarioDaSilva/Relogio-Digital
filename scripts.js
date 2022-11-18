const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const horaNewYork = document.getElementById("newYourk");
const horadubai = document.getElementById("dubai");
const horacancun = document.getElementById("cancun");
const horalisboa = document.getElementById("lisboa");

const relogio = setInterval(function time() {
  let data = new Date();

  let hr = data.getHours();
  let min = data.getMinutes();
  let seg = data.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (seg < 10) seg = "0" + seg;

  let hrBrasilia = hr;

  let hrDubai = hrBrasilia + 7;
  if (hrDubai > 24) {
    hrDubai = hrDubai - 24;
    if (hrDubai < 10) hrDubai = "0" + hrDubai;
  }
  let dubai = hrDubai + ":" + min + ":" + seg;

  let hrNewYork = hrBrasilia - 2;
  if (hrNewYork > 24) {
    hrNewYork = hrNewYork - 24;
    if (hrNewYork < 10) hrNewYork = "0" + hrNewYork;
  }
  let newYork = hrNewYork + ":" + min + ":" + seg;

  let hrCancun = hrBrasilia - 2;
  if (hrCancun > 24) {
    hrCancun = hrCancun - 24;
    if (hrCancun < 10) hrCancun = "0" + hrCancun;
  }
  let cancun = hrCancun + ":" + min + ":" + seg;

  let hrLisboa = hrBrasilia + 3;
  if (hrLisboa > 24) {
    hrLisboa = hrLisboa - 24;
    if (hrLisboa < 10) hrLisboa = "0" + hrLisboa;
  }
  let lisboa = hrLisboa + ":" + min + ":" + seg;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;

  horaNewYork.textContent = newYork;
  horadubai.textContent = dubai;
  horacancun.textContent = cancun;
  horalisboa.textContent = lisboa;
});


var sec=0
var min=0
var hr=0

var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
    interval= setInterval(watch,1000)


}

function limpar(){
    clearInterval(interval)
    document.getElementById('watch').innerText='00:00:00'
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0 
    document.getElementById('watch').innerText

}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}