let  btn_consulta = document.getElementById("consultarAPI");

btn_consulta.addEventListener("click", verInfo);

let laFrase = document.getElementById("frase");

// funcion asincronica "se coloca async function"
async function verInfo(){

    try{

        let respuesta = await fetch("https://api.chucknorris.io/jokes/random"); //URL de la API a consultar
        if (respuesta.ok){
            let aux = await respuesta.json();
            console.log(aux);
            laFrase.innerHTML = aux.value; // apuntamos al elemento del html y le agregamos la creacion innerHTML, le agregamos el valor del aux.
            
        }
    
    } catch{
            console.log("ERROR al obtener los datos desder la API");

    }
}

