//----------  CAMBIO DE IMG: USO DE SETINTERVAL --------------------------

//******** CAMBIO DE IMG OJOS JUGADOR: cambio de imágenes del jugador mientras esta detenido (tecla )
var quieto = setInterval(detenido,2000); //setInterval(nombreFuncion, tiempoIntervalo) 
// crear la función que cambia la img del cesped
var cambiarOjos = true; //esta variable inicia en true, y cambia a false luego de tocar el boton "Tirada"
var contador0 = 2; 
function detenido(){
    if(cambiarOjos == true && (contador0%2 == 0)){
        imgJugador.src = "img/parado0.png"; 
        cambiarOjos = false;
        contador0 ++;
            } else if (cambiarOjos == false && (contador0%2 != 0)){
            imgJugador.src = " ";
               imgJugador.src = "img/parado1.png"; 
                cambiarOjos = true;
                contador0++; 
    }
}
function detenerDetenido(){
    clearInterval(quieto); //clearInterval(nombreVariableDeSetInterval)
}


//******** CAMBIO DE IMG CESPED: cambio de imágenes del cesped 
var pasto = setInterval(cesped,1000); //setInterval(nombreFuncion, tiempoIntervalo)
const moverCesped = document.getElementById("cesped");
// crear la función que cambia la img del cesped
var cambiarCesped = true; //esta variable inicia en true, y cambia a false  
var contador1 = 2; 
function cesped(){
    if(cambiarCesped == true && (contador1%2 == 0) &&  puedeAvanzarJugador == true){
        moverCesped.src = "img/cesped33.png"; 
        cambiarCesped = false;
        contador1 ++;
            } else if (cambiarCesped == false && (contador1%2 != 0) &&  puedeAvanzarJugador == true){
                moverCesped.src = "img/cesped22.jpg"; 
                cambiarCesped = true;
                contador1++; 
    }
}
function detenerCesped(){
    clearInterval(pasto);
}


//******** CAMBIO DE IMG AVANCE JUGADOR: cambio de imágenes del jugador mientras avanza (tecla j)
var avanza = setInterval(correr,1000); //setInterval(nombreFuncion, tiempoIntervalo) 
// crear la función que cambia la img del cesped
var cambiarJugador = true; //esta variable inicia en true, y cambia a false luego de tocar el boton "Tirada"
var contador2 = 2; 
function correr(){ // esta función cambia de img del jugador sensación de correr
    if(cambiarJugador == true && (contador2%2 == 0) &&  puedeAvanzarJugador == true){
        imgJugador.src = "img/avanza0.png"; 
        cambiarJugador = false;
        contador2 ++;
            } else if (cambiarJugador == false && (contador2%2 != 0) &&  puedeAvanzarJugador == true ){
            imgJugador.src = " ";
               imgJugador.src = "img/avanza1.png"; 
                cambiarJugador = true;
                contador2++; 
    }
}
function detenerJugador(){
    clearInterval(avanza); //clearInterval(nombreVariableDeSetInterval)
}


//******** CAMBIO DE IMG PATADA JUGADOR: cambio de imágenes del jugador mientras patea (teclas v, b y h)
var patada = setInterval(patear,1000); //setInterval(nombreFuncion, tiempoIntervalo)

// crear la función que cambia la img del jugador
var cambiarPatada = true; //esta variable inicia en true, y cambia a false luego  
var contador3 = 2; 
function patear(){
    if(cambiarPatada == true && (contador3%2 == 0)){
        imgJugador.src = "img/patada0.png"; 
        cambiarPatada = false;
        contador3 ++;
            } else if (cambiarPatada == false && (contador3%2 != 0)){
                imgJugador.src = "img/patada1.png"; 
                cambiarPatada = true;
                contador3++; 
    }
}
function detenerPatada(){
    clearInterval(patada); //clearInterval(nombreVariableDeSetInterval)
}


//******** CAMBIO DE IMG PELOTA RODANDO: cambio de imágenes del jugador mientras avanza (tecla j)
var rueda = setInterval(rodando,2000); //setInterval(nombreFuncion, tiempoIntervalo) 
// crear la función que cambia la img del cesped
var cambiarPelota = true; //esta variable inicia en true, y cambia a false luego de tocar el  
var contador4 = 2; 
function rodando(){ // esta función cambia de img del jugador sensación de correr
    if(cambiarPelota == true && (contador4%2 == 0)  ){
        imgPelota.src = "img/pelota11.png"; 
        cambiarPelota = false; 
        contador4 ++;
            } else if (cambiarPelota == false && (contador4%2 != 0) ){ 
               imgPelota.src = "img/pelota22.png"; 
               cambiarPelota = true;
                contador4++; 
    }
}
function detenerPel(){
    clearInterval(rueda); //clearInterval(nombreVariableDeSetInterval)
}

var puedeAvanzarJugador = true;  
// LEER TECLADO
///////////// AVANZAR    LEER EL TECLADO (avanzar presionar tecla j  "74")
document.addEventListener('keypress', function(evento){// recordar que el keypress solo acepta valores alfabeticos
    if((evento.keyCode == 74 || evento.keyCode == 106)){    
//con la idea de que el cambio de texto varie cada cierto tiempo, voy a hacer uso de un contador
// y en números impares se imprimirá el texto1
// y en números pares se imprimirá el texto2
     correr(); // esta función cambia de img del jugador sensación de correr
     cesped(); // esta función cambia de img del cesped sensación de correr
     avanzar(); // genera las funciones de aparecer de la Pelota y de Arquero   
     rodando();
    }
  });
 

///////////// DETENERSE    LEER EL TECLADO (avanzar soltar tecla j  "74")
document.addEventListener('keyup', function(evento){
    if(  evento.keyCode == 74 || evento.keyCode == 106 // DETERNER AVANCE
        || (evento.keyCode == 86 || evento.keyCode == 118) // DETERNER PATADA CORTA
        || (evento.keyCode == 66 || evento.keyCode == 98)   // DETENER PATADA LARGA 
        ||  (evento.keyCode == 75 || evento.keyCode == 107) //DETENER FESTEJO ARRIBA
        || (evento.keyCode == 85 || evento.keyCode == 117) //DETENER FESTEJO 10
        || (evento.keyCode == 72 || evento.keyCode == 104) ){ //DETENER PATADA ANGULO vvvvvv
     pelota.rodando = false; // ya no se implementa la función gravedad;
     imgJugador.src = 'img/parado0.png';//ancho:80  alto:123  
    detenerJugador(); // esta función detiene el setInterval de cambio img del jugador corriendo
    detenido(); // esta función ejecuta cambio de img del jugador en reposo sensación de parpadear
    }
  });
 

///////////// PATADA CORTA    LEER EL TECLADO (avanzar tecla v  "86")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 86 || evento.keyCode == 118){   
     patear();
     patadaCorta();
    }
  });
///////////// PATADA LARGA    LEER EL TECLADO (avanzar tecla b  "66")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 66 || evento.keyCode == 98){   
     patear();
     patadaLarga();
    }
  });
///////////// PATADA ANGULO   LEER EL TECLADO (avanzar tecla h  "72")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 72 || evento.keyCode == 104){  
     patear();
     patadaAngulo();
    }
  });



///////////// BRAZOS ARRIBA SERIO   LEER EL TECLADO (avanzar tecla u  " ")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 85 || evento.keyCode == 117){ 
     imgJugador.src = 'img/diez.png';// 
    }
});
  ///////////// BRAZOS ESTIRADOS SONRIENTE  LEER EL TECLADO (avanzar tecla k  " ")
document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 75 || evento.keyCode == 107){ 
     imgJugador.src = 'img/arriba.png';// 
    }
});


//------------ funcion cargar imagenes ----------------------------------------------------------------
var imgJugador;
var imgPelota; 
var imgArquero;
 


function cargaImagenes(){//esta función se llamará primero, al inicializar

    imgJugador = new Image();
    imgPelota = new Image(); 
    imgArquero = new Image();
    
    imgJugador.src = 'img/parado0.png';//ancho:80  alto:123
    imgPelota.src = 'img/pelota11.png';//ancho:35  alto:34 
    imgArquero.src = 'img/arquero.png';//ancho:98  alto:129
}



//------------ funcion inicializa ----------------------------------------------------------------

var ancho = 700;
var alto = 300;
var canvas;
var ctx;


function inicializa(){ // esta función esta llamada desde la etiqueta <body onload=""> del html
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
ctx.drawImage(imgJugador,0,0,80,123,100,50,80,80);
}

 

//------------ funcion dibujar pelota ----------------------------------------------------------------
//hay muchos trucos para que un jugador salte sobre el eje y
// yo modificaré este truco, para que mi pelota "salte"
// sobre el eje x, osea en forma horizontal.

//Creo una variable la cual tendra muchos atributos, que me indicarán
// diferentes cosas, poscición, velocidad y estado de la pelota.
var pelota = {x:700, y:100, vx:0, vy:0, gravedad:2, salto:30, vxmax:9, rodando: false, pateaCorto:false, pateaLargo:false, pateaAngulo:false};

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
//pelota.x cambiará con respecto a la función restaIzquierdaPelota(), sumarDerechaPelota() y apareceArquero().


function aparecePelota(){ //esta función debe estar dentro de la función avanzar 
    pelota.rodando = true;
    pelota.vx =  pelota.salto; //57px
}



//------------ funcion avanzar  ----------------------------------------------------------------
function avanzar(){ //llamada por el evento keypress tecla j
    aparecePelota(); // la función saltar se detiene con el evento keyup tecla j
    apareceArquero();
}


//------------ movimiento pelota ----------------------------------------------------------------
//esta función hará que la pelota se mueva sobre el ejex hacia la izquierda, mientras el jugador corra, tecla j
function restaIzquierdaPelota(){  
    if(pelota.rodando == true && puedeAvanzarJugador == true){
        if(pelota.x < 0){  // esta posición es cuando sale del canvas por la izq
            pelota.rodando = false; // ya no se implementa la función restaIzquierdaPelota
            pelota.vx = 0;
            pelota.x = 700; // vuelve al punto de partida
        } else{
        pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
        pelota.x -= pelota.vx //se le resta la velocidad 57-55=2, 55-53=2, 2, 2, ..., 2-0=2, 0-(-2)=2, 2-(-3)=5, 7, 9,...el valor de x aumenta
        }
    }
}


// -------- variable contador ---------
// esta variable me sirve para programar la impresión del arquero en la pantalla
// en cierto valor de contador, se inicia la función que detiene el avance del arquero sobre el ejex


//------------ funciones patadas ----------------------------------------------------------------
var contador = 0; // se incrementará a medida que el jugador realice patadas.
var aparecArquero = false;

function patadaCorta (){ 
    if(pelota.x >90 && pelota.x <165){
    pelota.pateaCorto = true; // atributo para entrar en la función sumarDerecha 
    sumaDerechaPelota();
    contador = contador +1; 
    aparecArquero = true;
    }else{ pelota.pateaCorto = false}
}
function patadaLarga (){
    if(pelota.x >90 && pelota.x <165){
    pelota.pateaLargo = true; // atributo para entrar en la función sumarDerecha 
    sumaDerechaPelota();
    contador = contador +1; 
    aparecArquero = true;
    }else{ pelota.pateaLargo = false}
}
function patadaAngulo (){ 
    if(pelota.x >90 && pelota.x <165){
    pelota.pateaAngulo = true; // atributo para entrar en la función sumarDerecha 
    sumaDerechaPelota();
    contador = contador +1; 
    aparecArquero = true;
    }else{ pelota.pateaAngulo = false}
}



//esta función hará que la pelota se mueva sobre el ejex hacia la derecha, luego de una patada, teclas v, b ó h
function sumaDerechaPelota(){   //aumenta en positivo el valor de pelota.x
    if(pelota.pateaCorto == true ){
        pelota.vx =  pelota.salto; //
                 if(pelota.x > 500){  // Es esta posición que la pelota se detiene
                    pelota.pateaCorto = false; // se detiene la función sumarDerecha
                 }   else {
                pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
                pelota.x += pelota.vx}
    } else if (pelota.pateaLargo == true ){
        pelota.vx =  pelota.salto; //57px
                 if(pelota.x > 700){  // esta posición es cuando sale del canvas por la derecha
                    pelota.pateaLargo = false; // se detiene la función sumarDerecha
                 }   else {
                pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
                pelota.x += pelota.vx}
     } else if (pelota.pateaAngulo == true ){
        pelota.vx =  pelota.salto ; //57px
        pelota.vy = 6; 
                 if(pelota.x > 700 || pelota.y >500){  // esta posición es cuando sale del canvas por la derecha en cierto ángulo
                    pelota.pateaAngulo = false; // se detiene la función sumarDerecha
                    pelota.x = 700;
                    pelota.y = 100; 
                 }   else {
                pelota.vx -=  pelota.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
                pelota.x += pelota.vx;
                pelota.vy -= pelota.gravedad;
                pelota.y  -= pelota.vy; }
}
}


//------------ ARQUERO ----------------------------------------------------------------
// Un contador se irá incrementando mientras el jugador realice patadas
// En cierto valor de contador, se inicia una función que imprime al arquero en el div

//------------ funcion dibujaArquero ----------------------------------------------------------------
var arquero = {x:700, y:50, vx:0, gravedad:2, salto:30, vxmax:9, tapando: false};


function arqueroAtributos(){ //ubica la imagen del jugador dentro del canvas
    // se debe cargar el ctx (contexto) 
    // y se utiliza el atributo 
    //.drawImage(NombreImagen,0,0,ancho,alto,ejex, ejey,escalax, escalay)
    ctx.drawImage(imgArquero,0,0,98,129,arquero.x,50,80,80);
    }//pelota.x cambiará con respecto a la función  restaIzquierdaPelota()
    
function apareceArquero(){ //esta función debe estar dentro de la función  principal
        if(contador == 3 && pelota.x < 190){  // Si "se realizaron tres patadas, y pelota.x <300 que es cuando pelota esta muy cerca del jugador"
            arquero.tapando = true; 
            arquero.vx =  arquero.salto; //
            pelota.x = 150; 
        }
    }

function restaIzquierdaArquero(){  //!!!!!!!!!!!!!!!!!!!
        if(arquero.tapando == true){ 
            if(arquero.x == 500 ){  // esta posición es donde el arquero detendrá su avance (coincide con pelota.x de pateaCorto)
            detieneArquero();
            puedeAvanzarJugador = false; 
            }
            else if(arquero.tapando = true && arquero.x > 500 ){
            arquero.vx -=  arquero.gravedad; // vx = 57px y aqui se le resta 57-2=55, 53, ..., 3, 1, -3, -5, etc... el valor de vx se vuelve negativo
            arquero.x -= arquero.vx //se le resta la velocidad 57-55=2, 55-53=2, 2, 2, ..., 2-0=2, 0-(-2)=2, 2-(-3)=5, 7, 9,...el valor de x aumenta
            puedeAvanzarJugador = false;  
         }
        }
    }

//------------ REDIRECCIÓN A ENLACE FINAL  ----------------------------------------------------------------
 

var final = setInterval(abrirFinal ,3000);


function abrirFinal(){ // esta función se ejecutará al cumplirse las condicicones mencionadas
//      . el arquero y el jugador esten impresos en pantalla
//      . el jugador pateo
//      . la pelota rueda hasta fuera del canvas por derecha.
       if(puedeAvanzarJugador == false && contador > 3){
          window.location.href = "/SanJuegaMesssss/finalMess.html"
       /* window.location.href recarga la página
         al igualarla a otra página web
         cuando recarga redireccionará automaticamente a la nueva dirección
       */}
}
   

function detenerFinal (){
    clearInterval(final);
}

//------------ BUCLE PRINCIPAL----------------------------------------------------------------

var FPS = 50;
setInterval(function(){
    principal();
}, 1000/FPS); // esto último indica el lapso de tiempo 10veces por segundo



//------------ function principal () ----------------------------------------------------------------
// DESDE AQUI SE LLAMAN A TODAS LAS FUNCIONES ANTERIORES

function principal (){ // esta función esta dentro del setInterval que considero BUCLE PRINCIPAL, 
                      // por lo tanto se ejecutará según el intervalo de ese setInterval (1000/50)
  
   
    borraCanvas();

    //JUGADOR
    dibujaJugador(); //ubica al jugador dentro del canvas
    detenerJugador(); // inicia con el jugador detenido
    detenerPatada(); // inicia con las patadas detenidas

    //PELOTA
    restaIzquierdaPelota(); // genera el efecto de mov de la pelota hacia la izquierda, mientras el jugador corra
    pelotaAtributos(); //ubica la imagen de la pelota dentro del canvas
    sumaDerechaPelota(); 
    detenerPel();

    //ARQUERO
    restaIzquierdaArquero(); // genera el efecto de mov de la pelota hacia la izquierda, mientras el jugador corra
    arqueroAtributos(); //ubica la imagen de la Arquero dentro del canvas
   


    //CESPED
    detenerCesped(); //ESTA FUNCION ESTA LLAMADA AQUI PORQUE POR ALGÚN MOTIVO AL REINICIAR LA FUNCION QUE MUEVE AL JUGADOR 
    // Y AL CESPED SE ACTIVAN. POR LO TANTO, PREFIERO QUE INICIE CON LAS FUNCIONES QUE DETIENEN EL SETINVERVAL.
    
    //ABRIR ENLACE FINAL
    detenerFinal ()
    abrirFinal()

}

 
