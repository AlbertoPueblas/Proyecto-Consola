var pantalla = document.getElementById("box");
var botonEncender = document.getElementById("inicioConsola")
var encendido=false;
var cambio = document.getElementById("derecha");
var cambioIz= document.getElementById("izquierda");
var reset = document.getElementById("reset");
//importacion de imagenes
var imgOn = "url(./imagen/gbc.gif)";
var img1 = "url(./imagen/zelda.jpg)";
var img2 = "url(./imagen/Mario.jpg)";
var img3 = "url(./imagen/supermario.jpg)";
var imgOff = "url(./imagen/fondogris.jpg)";
var imagenes=[img1,img2,img3,];

var posicionArray = 0;
var powerOn= document.getElementById("ledRojo")

//importacion de audios
var intro= new Audio();
intro.src="./sonido/gameboy.mp3"
var soundReset= new Audio();
soundReset.src="./sonido/pacman.mp3"
var flechasSound= new Audio();
flechasSound.src="./sonido/marioCoin.mp3"



//Botón de encendido
botonEncender.addEventListener("click",function(){
  if(!encendido){
    encendido = true;
    pantalla.style.backgroundImage=imgOn;
    powerOn.classList.toggle("PowerOn")
    intro.play();
    
  }else if(encendido){
    encendido=false;
    pantalla.style.backgroundImage=imgOff;
    powerOn.classList.toggle("PowerOn")
}})
//Cambio imagenes botón derecha
cambio.addEventListener("click",function(){
  if(encendido){
    flechasSound.play();
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
//cambio imagenes botón izquierdo
cambioIz.addEventListener("click",function(){
  if(encendido){
    flechasSound.play();
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
}})
//boton reset
reset.addEventListener("click",()=>{
 if(encendido){
  pantalla.style.backgroundImage=imgOn;
  soundReset.play();
 }

  
})



