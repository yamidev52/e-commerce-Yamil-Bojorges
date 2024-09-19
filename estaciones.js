function estacion() {

    let dia = Number(prompt("¿En que dia se encuentra?"))
    let mes = Number(prompt("¿En que mes se encuentra?"))
    let estacion

    let hemisferio = Number(prompt("¿De que Hemisferio eres?\n 1. Hemisferio Norte\n 2. Hemisferio Sur"))
    switch (hemisferio) {
        case 1:
            if ((mes == 12 && dia >= 21) || (mes >= 1 && mes <= 2) || (mes == 3 && dia < 21)) {
                estacion = "Invierno"
            }else if ((mes == 3 && dia >= 21) || (mes >= 4 && mes <= 5) || (mes == 6 && dia < 21)) {
                estacion = "Primavera"
            }else if ((mes == 6 && dia >= 21) || (mes >= 7 && mes <= 8) || (mes == 9 && dia < 21)) {
                estacion = "Verano"
            }else if ((mes == 9 && dia >= 21) || (mes >= 10 && mes <= 11) || (mes == 12 && dia < 21)) {
                estacion = "Otoño"
            }
            break;

        case 2:
            if ((mes == 12 && dia >= 21) || (mes >= 1 && mes <= 2) || (mes == 3 && dia < 21)) {
                estacion = "Verano"
            }else if ((mes == 3 && dia >= 21) || (mes >= 4 && mes <= 5) || (mes == 6 && dia < 21)) {
                estacion = "Otoño"
            }else if ((mes == 6 && dia >= 21) || (mes >= 7 && mes <= 8) || (mes == 9 && dia < 21)) {
                estacion = "Invierno"
            }else if ((mes == 9 && dia >= 21) || (mes >= 10 && mes <= 11) || (mes == 12 && dia < 21)) {
                estacion = "Primavera"
            }
        break;
    
        default:
            alert("Ingresaste un Hemisferio Equivocado!!!")
            break;
    }

    return "Estas en la estacion de " + estacion
}

let estClimatica = estacion()
alert(estClimatica)

