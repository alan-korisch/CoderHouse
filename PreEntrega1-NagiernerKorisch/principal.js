
const jardin = 200;
const termo = 1000;
const split = 800;

let opcionesValidas = ["riego", "aire", "termotanque", "combinar"];
let opcionSeleccionada;

elegirOpcion();



function elegirOpcion () {
    do {
    opcionSeleccionada = prompt("Por favor, elija una opción de las que figura en pantalla)").toLowerCase();
    } while (!opcionesValidas.includes(opcionSeleccionada));

    switch(opcionSeleccionada) {
    case "riego":
            let respuesta = prompt("¿Cuantos m2 de jardín tenes?");
            calcular(respuesta, jardin);
        break;
    case "aire":
            let respuesta1 = prompt("¿Cuantos frigorias tiene tu aire?");
            calcular(respuesta1, split);
        break;
    case "termotanque":
            let respuesta2 = prompt("¿Cuantos litros tiene tu termotanque?");
            calcular(respuesta2, split);
        break;
    case "combinar":
           let resultado =  combinarServicios();
           alert (`La cotización para la instalación del servicio es de $ ${resultado} muchas gracias por consultar`);
        break;
    }
}

function calcular (valor1, valor2){
    let resultado = valor1 * valor2;
    alert (`La cotización para la instalación del servicio es de $ ${resultado} muchas gracias por consultar`);
}

function combinarServicios (){
    let cantidad = prompt("Elija la cantidad de servicios a cotizar");
    let aux = 0;
    let aux2 = 0;
     for (let i = 0; i < cantidad; i++) {
        
        do {
            opcionSeleccionada = prompt("Por favor, elija una opción de las que figura en pantalla)").toLowerCase();
            } while (!opcionesValidas.includes(opcionSeleccionada));
        
            switch(opcionSeleccionada) {
            case "riego":
                    let respuesta = prompt("¿Cuantos m2 de jardín tenes?");
                    aux = respuesta * jardin;
                    aux2 = aux + aux2;
                break;
            case "aire":
                    let respuesta1 = prompt("¿Cuantos frigorias tiene tu aire?");
                    aux = respuesta1 * split;
                    aux2 = aux + aux2;
                break;
            case "termotanque":
                    let respuesta2 = prompt("¿Cuantos litros tiene tu termotanque?");
                    aux = respuesta2 * termo;
                    aux2 = aux + aux2;
                break;
            }
    }
    return aux2; 
}

