window.onload  = function(){
    document.getElementById("primero").onclick = seleccionarPrimero;
    document.getElementById("segundo").onclick = seleccionarSegundo;
}
function seleccionarPrimero(){
    var primero =  document.getElementById("uno");
    var segundo =  document.getElementById("dos");
    primero.className="selected";
    segundo.className="opcion";
}
function seleccionarSegundo(){
    var primero =  document.getElementById("uno");
    var segundo =  document.getElementById("dos");
    primero.className="opcion";   
    segundo.className="selected";
}