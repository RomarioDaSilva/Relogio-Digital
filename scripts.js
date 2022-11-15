function relogio() {
    const data = new Date()

    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()


    if (hora < 10) {
        if (minutos < 10) {
            if (segundos < 10) {
                document.getElementById('relogioDigital').innerHTML = '0' + hora + ':0' + minutos + ':0' + segundos
            } else {
                document.getElementById('relogioDigital').innerHTML = '0' + hora + ':0' + minutos + ':' + segundos
            }
        } else {
            if (segundos < 10) {
                document.getElementById('relogioDigital').innerHTML = '0' + hora + ':' + minutos + ':0' + segundos
            } else {
                document.getElementById('relogioDigital').innerHTML = '0' + hora + ':' + minutos + ':' + segundos
            }
        }
    } else {
        if (minutos < 10) {
            if (segundos < 10) {
                document.getElementById('relogioDigital').innerHTML = hora + ':0' + minutos + ':0' + segundos
            } else {
                document.getElementById('relogioDigital').innerHTML = hora + ':0' + minutos + ':' + segundos
            }
        } else {
            if (segundos < 10) {
                document.getElementById('relogioDigital').innerHTML = hora + ':' + minutos + ':0' + segundos
            } else {
                document.getElementById('relogioDigital').innerHTML = hora + ':' + minutos + ':' + segundos
            }
        }
    }

    if (hora >= 0 && hora < 6) {
        document.getElementById('mensagem').innerHTML= "Boa madrugada!"
    } else if (hora > 6 && hora < 12) {
        document.getElementById('mensagem').innerHTML= "Bom Dia!"
    }else if(hora > 12 && hora < 18) {
        document.getElementById('mensagem').innerHTML= "Boa Tarde!"
    }else {
        document.getElementById('mensagem').innerHTML= "Boa Noite!"
    }
}

setInterval(relogio, 1000)