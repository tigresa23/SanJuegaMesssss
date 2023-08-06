// LEER EL TECLADO
 
// AVANZAR    LEER EL TECLADO (avanzar tecla j  "74")
document.addEventListener('keypress', function(evento){// recordar que el keypress solo acepta valores alfabeticos
    if(evento.keyCode == 74 || evento.keyCode == 106 ){  
     imgJugador.src = "img/corriendo.gif";//ancho:80  alto:123 
    restaIzquierda(); 
     avanzar();
    }
  });
// DETENERSE    LEER EL TECLADO (avanzar tecla j  " ")
  document.addEventListener('keyup', function(evento){
    if(  evento.keyCode == 74 || evento.keyCode == 106 // DETERNER AVANCE
        || (evento.keyCode == 86 || evento.keyCode == 118) // DETERNER PATADA CORTA
        || (evento.keyCode == 66 || evento.keyCode == 98)   // DETENER PATADA LARGA 
        ||  (evento.keyCode == 75 || evento.keyCode == 107) //DETENER FESTEJO ARRIBA
        || (evento.keyCode == 85 || evento.keyCode == 117) //DETENER FESTEJO 10
        || (evento.keyCode == 72 || evento.keyCode == 104) ){ //DETENER PATADA ANGULO 
     pelota.saltando = false; // ya no se implementa la función gravedad;
     imgJugador.src = 'img/parado.gif';//ancho:80  alto:123
    }
  });




// PATADA CORTA    LEER EL TECLADO (avanzar tecla v  "86")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 86 || evento.keyCode == 118){  
     imgJugador.src = 'img/patada.png';// 
     pelota.pateando = true;
     patadaCorta();
    }
  });
// PATADA LARGA    LEER EL TECLADO (avanzar tecla b  "66")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 66 || evento.keyCode == 98){  
     imgJugador.src = 'img/patada.png';// 
     patadaLarga();
    }
  });
// PATADA ANGULO   LEER EL TECLADO (avanzar tecla h  "72")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 72 || evento.keyCode == 104){ 
     imgJugador.src = 'img/patada.png';// 
     patadaAngulo();
    }
  });



// BRAZOS ARRIBA SERIO   LEER EL TECLADO (avanzar tecla u  " ")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 85 || evento.keyCode == 117){ 
     imgJugador.src = 'img/diez.png';// 
    }
  });
  // BRAZOS ESTIRADOS SONRIENTE  LEER EL TECLADO (avanzar tecla k  " ")
  document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 75 || evento.keyCode == 107){ 
     imgJugador.src = 'img/arriba.png';// 
    }
  });

 

//------------ funcion cargar imagenes ----------------------------------------------------------------
var imgJugador;
var imgPelota; 
 


function cargaImagenes(){//esta función se llamará primero, al inicializar

    imgJugador = new Image();
    imgPelota = new Image(); 
    
    imgJugador.src = 'img/parado.gif';//ancho:80  alto:123
    imgPelota.src = 'img/pelota.png';//ancho:128  alto:24 
}



//------------ funcion inicializa ----------------------------------------------------------------

var ancho = 700;
var alto = 300;
var canvas;
var ctx;


function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d"); //variable.atributo, 
// entonces lo que se pide aqui, es que a la variable canvas le otorgue un contexto 2d.
cargaImagenes();
}



//------------ funcion borraCanvas ----------------------------------------------------------------

function borraCanvas(){// para borrar el canvas lo mas sencillo es 
// cambiarla la anchura y la altura, cuando esto cambia borra lo anterior.
    canvas.width = ancho;
    canvas.height = alto;
}


//------------ funcion dibujaJugador ----------------------------------------------------------------

function dibujaJugador(){ //ubica la imagen del jugador dentro del canvas
// se debe cargar el ctx (contexto) 
// y se utiliza el atributo 
//.drawImage(NombreImagen,0,0,ancho,alto,ejex, ejey,escalax, escalay)
ctx.drawImage(imgJugador,0,0,80,123,100,150,80,80);
}

 

//------------ funcion dibujar pelota ----------------------------------------------------------------
//hay muchos trucos para que un jugador salte sobre el eje y
// yo modificaré este truco, para que mi pelota "salte"
// sobre el eje x, osea en forma horizontal.

//Creo una variable la cual tendra muchos atributos, que me indicarán
// diferentes cosas, poscición, velocidad y estado de la pelota.
var pelota = {x:700, y:200, vx:0, vy:0, gravedad:2, salto:57, vxmax:9, saltando:false, pateaCorto:false, pateaLargo:false, pateaAngulo:false};

// salto son los px que avanzará
// se moverá a 57px por fotograma
// pero cada vez que pase un fotograma se le restarán 2px.
//-----------------------------------  ---------------------
function pelotaAtributos(){ //ubica la imagen de la pelota dentro del canvas
    // se debe cargar el ctx (contexto) 
    // y se utiliza el atributo 
    //.drawImage(NombreImagen,0,0,ancho,alto,ejex, ejey,escalax, escalay)
    ctx.drawImage(imgPelota,0,0,35,34, pelota.x, pelota.y,30,30);
 }
//pelota.x cambiará con respecto a la función gravedad()


function saltar(){ //esta función debe estar dentro de la función avanzar 
    pelota.saltando = true;
    pelota.vx =  pelota.salto; //57px
}



//------------ funcion avanzar  ----------------------------------------------------------------
function avanzar(){ //llamada por el evento keypress tecla j
    saltar(); // la función saltar se detiene con el evento keyup tecla j
}


//------------ patadas ----------------------------------------------------------------
//esta función hará que la pelota se mueva sobre el ejex hacia la izquierda, mientras el jugador corra, tecla j
function restaIzquierda(){  
    if(pelota.saltando == true){


        if(pelota.x < 0){  // esta posición es cuando sale del canvas por la izq
            pelota.saltando = false; // ya no se implementa la función restaIzquierda
            pelota.vx = 0;
            pelota.x = 700; // vuelve al punto de partida
         
        }
        else{
        pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
        pelota.x -= pelota.vx //se le resta la velocidad 57-55=2, 55-53=2, 2, 2, ..., 2-0=2, 0-(-2)=2, 2-(-3)=5, 7, 9,...el valor de x aumenta
        }
    }
}
//------------ funciones patadas ----------------------------------------------------------------
 
function patadaCorta (){ 
    if(pelota.x >90 && pelota.x <165){
    pelota.pateaCorto = true; // atributo para entrar en la función sumarDerecha 
    sumaDerecha();
    }else{ pelota.pateaCorto = false}
}
function patadaLarga (){
    if(pelota.x >90 && pelota.x <165){
    pelota.pateaLargo = true; // atributo para entrar en la función sumarDerecha 
    sumaDerecha();
    }else{ pelota.pateaLargo = false}
}
function patadaAngulo (){ 
    if(pelota.x >90 && pelota.x <165){
    pelota.pateaAngulo = true; // atributo para entrar en la función sumarDerecha 
    sumaDerecha();
    }else{ pelota.pateaAngulo = false}
}



//esta función hará que la pelota se mueva sobre el ejex hacia la derecha, luego de una patada, teclas v, b ó h
function sumaDerecha(){   //aumenta en positivo el valor de pelota.x
    
    if(pelota.pateaCorto == true ){
        pelota.vx =  pelota.salto; //57px
                 if(pelota.x > 400){  // esta posición es cuando sale del canvas por la izq 
                    pelota.pateaCorto = false; // se detiene la función sumarDerecha
                 }   else {
                pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
                pelota.x += pelota.vx}


    } else if (pelota.pateaLargo == true ){
        pelota.vx =  pelota.salto; //57px
                 if(pelota.x > 680){  // esta posición es cuando sale del canvas por la izq 
                    pelota.pateaLargo = false; // se detiene la función sumarDerecha
                 }   else {
                pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
                pelota.x += pelota.vx}


     } else if (pelota.pateaAngulo == true ){
        pelota.vx =  pelota.salto; //57px
        pelota.vy = 12;

                 if(pelota.x > 680 || pelota.y >200){  // esta posición es cuando sale del canvas por la izq 
                    pelota.pateaAngulo = false; // se detiene la función sumarDerecha
                    pelota.x = 700;
                    pelota.y = 200; 

                 }   else {
                pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
                pelota.x += pelota.vx;
                pelota.vy -= pelota.gravedad;
                pelota.y  -= pelota.vy; }
}
}





//------------ BUCLE PRINCIPAL----------------------------------------------------------------


var FPS = 20;

setInterval(function(){
    principal();
}, 1000/FPS); // esto último indica el lapso de tiempo 10veces por segundo


//------------ function principal () ----------------------------------------------------------------
// DESDE AQUI SE LLAMAN A TODAS LAS FUNCIONES ANTERIORES

function principal (){
    borraCanvas();
    dibujaJugador(); //ubica al jugador dentro del canvas
    restaIzquierda(); // genera el efecto de mov de la pelota hacia la izquierda, mientras el jugador corra
    pelotaAtributos(); //ubica la imagen de la pelota dentro del canvas
    sumaDerecha();

    
}

 