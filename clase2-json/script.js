let persona = {
    nombre : "Lucas",
    apellido : "Martinez",
    edad : 43,
    sexo : "Masculino",
    casado: true,
    dni: 33222111,
    hijos : ["Leo","Matilda"]

}

let persona2 = persona;

console.log("persona 1")
console.log(persona.apellido);
console.log(persona.nombre);

console.log("persona 2")
console.log(persona2.apellido);
console.log(persona2.nombre);

// modifico persona2
