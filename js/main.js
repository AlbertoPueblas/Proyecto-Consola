var pantalla = document.getElementById("box");
var botonEncender = document.getElementById("inicioConsola")
var encendido=false;
var cambio = document.getElementById("derecha");
var cambioIz= document.getElementById("izquierda");
var reset = document.getElementById("reset");
var img1 = "url(./imagen/gbc.gif)";
var img2 = "url(./imagen/pokemon.jpg)";
var img3 = "url(./imagen/Mario.jpg)";
var img4 = "url(./imagen/supermario.jpg)";
var imgOff = "url(./imagen/fondogris.jpg)";
var imagenes=[img1,img2,img3,img4];
var posicionArray = 0;

var intro= new Audio();
intro.src="./sonido/gameboy.mp3"

var soundReset= new Audio();
soundReset.src="./sonido/pacman.mp3"

var flechasSound= new Audio();
flechasSound.src="./sonido/marioCoin.mp3"


botonEncender.addEventListener("click",function(){
  if(!encendido){
    encendido = true;
    

    pantalla.style.backgroundImage=imagenes[0];
    posicionArray=1;
    intro.play();

  }else if(encendido){
    encendido=false;
    pantalla.style.backgroundImage=imgOff;
    

  }
})

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

reset.addEventListener("click",()=>{
  pantalla.style.backgroundImage=imagenes[0];
  posicionArray=1;
  soundReset.play();

  
})



