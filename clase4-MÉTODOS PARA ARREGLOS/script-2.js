
 async function obtenerPersonajes(){ // funcion asincronica "se coloca async function"

        let respuesta = await fetch("https://rickandmortyapi.com/api/character"); //locacion del mock local a consultar
         let data = await respuesta.json();
         console.log("**************MOSTRAR LA DATA*****************");
            console.log(data);
            console.log("METODO FOR EACH personajes y su estado 'status'");
           data.results.forEach(element => {
            console.log(element.name + " "+element.status);
            });
            console.log("me mostró los nombres de personajes y su estado 'status'"); 
            console.log("");
            console.log("************");
            console.log("");
           console.log("METODO -MAP- MOSTRAR EL PERSONAJE Y SU TIPO");
        let personajes = data.results.map(personaje => ({nombre: personaje.name, tipo: personaje.type }));
        console.log(personajes);
        
        console.log(" un personaje solo") 
        console.log(personajes[0].nombre); 

        console.log("personaje en MAYUSCULA"); // pone los nombres en MAYUSCULAS
        
        let personajes_en_mayuscula = await data.results.map(personajes => personajes.name.toUpperCase());

        console.log(personajes_en_mayuscula);  
        
        let femenino = await data.results.filter(personajes => personajes.gender == "Female");
        console.log("mostrar todo los personajes FEMENINOS")
        console.log(femenino);
        let femeninoNombres = femenino.map(personajes => personajes.name);
        console.log(" solo nombres FEMENINOS");
        console.log(femeninoNombres);


        // falta la funcion mostarFemenino

    }


obtenerPersonajes();