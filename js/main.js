var pantalla = document.getElementById("box");
var botonEncender = document.getElementById("inicioConsola")
var encendido=false;
var cambio = document.getElementById("derecha");
var img1 = "url(./imagen/zelda.jpg)";
var img2 = "url(./imagen/pokemon.jpg)";
var img3 = "url(./imagen/Mario.jpg)";
var imgInicio = "url(./imagen/gbc.gif)";
var imagenes=[img1,img2,img3];
var posicionArray = 0;

botonEncender.addEventListener("click",function(){
  if(!encendido){
    encendido = true;

    pantalla.style.backgroundImage=imagenes[0];
    posicionArray=1;

  }else if(encendido){
    encendido=false;

    pantalla.style.backgroundImage=imgInicio;

  }
})

cambio.addEventListener("click",function(){
  if(encendido){
   if (posicionArray==0){
    pantalla.style.backgroundImage=imagenes[posicionArray];
    posicionArray++;
   }else if(posicionArray==1){
    pantalla.style.backgroundImage=imagenes[posicionArray];
    posicionArray++;
  }else{
    pantalla.style.backgroundImage=imagenes[posicionArray];
    posicionArray=0;
  }
}
})