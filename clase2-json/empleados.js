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





let data = `{
    "empresa":"curso2",
    "empleados":[
        {
            "nombre":"juanito",
            "apellido":"Perez-Companq",
            "dni":"33222100"
        },
        {
            "nombre":"Carla",
            "apellido":"Lopesku",
            "dni":"36965544"
        },
        {
            "nombre":"Julio",
            "apellido":"Cortazar",
            "dni":"16965777"
        },
        {
            "nombre":"Darius",
            "apellido":"Marck",
            "dni":"26219752"
        },
        {
            "nombre":"Leandro",
            "apellido":"Madloc",
            "dni":"32326951"
        }

    ]
}`;

let personaXXX = {
    nombre: "Abigail",
    apellido: "Lopéz",
    edad: 35,
    sexo: 'F',
    dni: 34483889,
    hijos: ["sin hijos"]
}
/* Covierte un objeto a JSON*/
let dataJson = JSON.stringify(personaXXX);
console.log(dataJson);

let personasEmpleadas = JSON.parse(data);

console.log("JSON" + data);
console.log("apellido" +"  "+ personasEmpleadas.empleados[1].apellido);
console.log(personasEmpleadas.empleados[0].apellido);
console.log(personasEmpleadas.empleados[1].nombre);
console.log(personasEmpleadas.empleados[2].dni);
console.log(personasEmpleadas.empleados[3].apellido);



let ul =document.getElementById("miLista");

personasEmpleadas.empleados.forEach(empleado => {
    let li = document.createElement("li");
    li.innerHTML = `nombre: ${empleado.nombre} apellido: ${empleado.apellido} dni: ${empleado.dni}`;
    ul.appendChild(li);
} )


/*
let cosa1 = document.createElement("li");
let cosa2 = document.createElement("li");
let cosa3 = document.createElement("li");
let cosa4= document.createElement("li");

cosa1.innerHTML = "texto 1";
cosa2.innerHTML = "texto 2";
cosa3.innerHTML = "texto 3";
cosa4.innerHTML = "texto 4";

ul.appendChild(cosa1);
ul.appendChild(cosa2);
ul.appendChild(cosa3);
ul.appendChild(cosa4);
*/


