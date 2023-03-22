let  btn_consulta = document.getElementById("consultarAPI");

btn_consulta.addEventListener("click", verInfo);

let verMock = document.getElementById("lista");

// funcion asincronica "se coloca async function"
async function verInfo(){

    try{

        let respuesta = await fetch("mockjs.json"); //locacion del mock local a consultar
        if (respuesta.ok){
            let aux = await respuesta.json();
            console.log(aux);
            verMock.innerHTML = aux.persona[1].nombre + "  " + aux.persona[3].apellido;; // apuntamos al elemento del html y le agregamos la creacion innerHTML, le agregamos el valor del aux.
            //verMock.innerHTML = aux.persona[3].apellido;
        }
    
    } catch{
            console.log("ERROR al obtener los datos desder la API");

    }
}

