let arreglo = [33,122,245,353,432,585,699];

for (let index = 0; index < arreglo.length; index++){
    elemento = arreglo[index];
    console.log(elemento);
}

console.log("-------");
console.log("FOR EACH");
console.log("-------");

arreglo.forEach(elemento => { // parametro de nombre a eleccion "elemento"
    console.log(elemento);
});

console.log("-------");
console.log("ARREGLO FILTRO PARES");
console.log("-------");

let pares = arreglo.filter( par => par % 2 == 0); // parametro de nombre a eleccion "par"

console.log(pares);

console.log("-------");
console.log("ARREGLO MAP"); // me permite cambiar/modificar el arreglo original como una copia de ese arreglo.
console.log("-------");

let multiplo = arreglo.map(numero => numero*2); // parametro de nombre a eleccion "numero"

console.log(multiplo);
