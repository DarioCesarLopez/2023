

let div1 = document.getElementById("Div_A");

div1.classList.add("colorNaranja");

let div3 = document.querySelector(".Div_C");

div3.classList.add("colorGris");

let bombita = document.getElementById("bomba");
bombita.classList.add("bomba");

let boton_bomba = document.getElementById("boom");

let imageDiv = document.getElementById("image");

boton_bomba.addEventListener('click', function(e){
  let bomba =  document.getElementById("boom").value;
  alert("LA BOMBA VA A EXPLOTAR");
  setTimeout(function(){
    explotar_bomba(bomba); }, 2000);
 });



 time = 10
 function explotar_bomba() {
    let intervalo = setInterval(function() {
        document.getElementById("bomba").innerHTML = time;
        if (time === 0) {
            clearInterval(intervalo);
            alert('¡¡BOOOOOM EXPLOCION!!');
            imageDiv.innerHTML = "<img src='image.jpg'>";
        }
        else {
            time--;
        }
    }, 1000);
}

