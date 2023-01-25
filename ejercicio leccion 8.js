//EJERCICIO FUNCION SIN PARÁMETROS


Leccion(true)

function Leccion(booleano) {
    console.log(booleano)

}


//FUNCION ASINCRONA

setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000);

console.log("setTimeout() Ejemplo...");


//FUNCION GENERADORA 


function* generaPares() {
    var indice = 2;
    while(true)
    yield indice ++;
}

const hola = generaPares()

console.log(hola.next().value)
