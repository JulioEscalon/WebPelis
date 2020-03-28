function enviar(){
    var mensaje = document.getElementById('msg-text').value;
    var iniciales = document.getElementById('usuario');

    //--------Creando nodo
    var caja= document.createElement('div');
    var texto= document.createTextNode(mensaje);
    //----- Poniendo el texto dentro del div
    caja.appendChild(texto);
    //--- Poniendo el atributo class al div caja
    caja.setAttribute('class','globo');
    
    //--- Creando el nodo para meter mis dos cosas
    var nuevo = document.createElement('div');
    nuevo.setAttribute('class','union');
    //--- Definiendo las variables para introducir el div nuevo
    var union=document.getElementById('union');




    //--- Probando :'v
    /*union.apendTo(iniciales);
    union.apendTo(caja);

    //---Poniendo el div dentro del otro div :'v
    msgbox.apendTo(union);*/
}