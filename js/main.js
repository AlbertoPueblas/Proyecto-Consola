var botonStart = document.querySelector("#inicioConsola");

var divLuz = document.querySelector("#ledRojo");

var pantalla = document.querySelector("#pantalla");

var encendido = false;


botonStart.addEventListener("click",()=>{
  if(encendido == true){
    encendido = true;
    divLuz.classList.toggle("PowerOff");
    divLuz.classList.toggle("PowerOn");

  }else {
    encendido = false;
    divLuz.classList.toggle("PowerOff");
    divLuz.classList.toggle("PowerOn");

  }
})

