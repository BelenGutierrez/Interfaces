//Audio
var audio = new Audio('sonido/burbuja.mp3');

//Posición inicial 
var posX = 0;
var posY = 0;

function coordenadas(event){
    posX = event.clientX;
    posY = event.clientY;
    
    //Evita que la pelota se salga de la pantalla.
    if (posX < 40){
        posX = 50;
    }
    
    if (posX > 1320){
        posX = 1310;
    }
    
    if (posY < 40){
        posY = 50;
    }
    
    if (posY > 600){
        posY = 590;
    }
    
    console.log(posX, posY);
    iniciar();
}

//Final e inicio de pantalla
var finalX = 1320;
var inicioX = 40; 
var finalY = 600;
var inicioY = 40; 

//Dirección inicial de la bola
var direccion = "bajaDerecha";

function iniciar(){ 
    var elemento=document.getElementById('lienzo'); 
    lienzo=elemento.getContext('2d'); 
    //lienzo.strokeRect(0,0,elemento.width,elemento.height);
    
    setInterval("dibujar()",8);
}/*window.addEventListener("load", iniciar, false)*/;

function dibujar() {
    
    if(direccion == "bajaDerecha"){
        posX++;
        posY++;
        if(posY == finalY){
            direccion = "subeDerecha";
            audio.play();
        }
        
        if(posX == finalX){
            direccion = "bajaIzquierda";
            audio.play();
        }
        
        if(posX == finalX+1){
            direccion = "bajaIzquierda";
            audio.play();
        }
        
        if(posY == finalY+1){
            direccion = "subeDerecha";
            audio.play();
        }
    }
    
    if(direccion=="subeDerecha"){
        posX++;
        posY--;
        
        if(posX == finalX){
            direccion = "subeIzquierda";
            audio.play();
        }
        
        if(posY == inicioY){
            direccion = "bajaDerecha";
            audio.play();
        }
    }

    if(direccion == "bajaIzquierda"){
        posX--;
        posY++;
        if(posY == finalY){
            direccion = "subeIzquierda";
            audio.play();
        }
        
        if(posX == inicioX){
            direccion = "bajaDerecha";
            audio.play();
        }
    }
    
    if(direccion == "subeIzquierda"){
        posX--;
        posY--;
        if(posY == inicioY){
            direccion = "bajaIzquierda";
            audio.play();
        }
        
        if(posX == inicioX){
            direccion = "subeDerecha";
            audio.play();
        }
    }
    
    lienzo.clearRect(0,0,1366,650);
    lienzo.strokeStyle = "#004cff";
    lienzo.lineWidth=4;
    lienzo.beginPath();
    lienzo.arc(posX,posY,40,0,Math.PI*2,true);
    lienzo.closePath();
    lienzo.stroke();
   
}
