var botonStart = document.querySelector("#inicioConsola");

var divLuz = document.querySelector("#ledRojo");

var pantalla = document.querySelector("#pantalla");

var sonido= document.querySelector("#sonido")

var intro = new Audio();
intro.src ="sonido/gameboy.mp3"

var encendido = true;

//Boton on/off//

botonStart.addEventListener("click",()=>{
  if(encendido == true){
    encendido = true;
    divLuz.classList.toggle("PowerOn");
    pantalla.classList.toggle("idPantallaOn");
    intro.play();
    



  }else if(encendido ==false) {
    encendido = false;
    divLuz.classList.toggle("PowerOff");
    pantalla.classList.toggle("idPantallaOff");


}})


var cambiarImg = document.querySelector("#derecha");

var imagenConsola =document.getElementsByClassName("imagenConsola")

var img1= '<img src="imagen/zelda.jpg" alt="" class="imagenConsola"></img>';

var img2= '<img src="imagen/pokemon.jpg" alt="" class="imagenConsola"></img>';

var img3= '<img src="imagen/mario.jpg" alt="" class="imagenConsola"></img>';

var pantalla = document.querySelector("#pantalla");

var imagenes = [img1,img2,img3];

cambiarImg.addEventListener("click", function () {
  pantalla.backgroundImagen = imagenes[img1,img2,img3];

  if (imagenes < backgroundImagen) {
     imagenes++;
  }
});
