window.onload  = function(){
    document.getElementById("primero").onclick = seleccionarPrimero;
    document.getElementById("segundo").onclick = seleccionarSegundo;
    document.getElementById("nombre-apellido").onclick = nickname;
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
function titulo(name,lastname){
    var title = name+" "+lastname;
    return title;
}
function eliminarDiv(divNone){
    return document.getElementById(divNone).style.display="none";

}function activarDiv(divInitial){
    return document.getElementById(divInitial).style.display="initial";

}
function nickname(){
    var nombre = document.getElementById("firstName").value;
    var apellido = document.getElementById("lastName").value;
    userTittle = titulo(nombre,apellido);
    var v1 = nombre.toUpperCase(), v2=apellido.toUpperCase();
    var letterNombre= v1[0];var letterApellido= v2[0];
    iniciales=letterNombre+letterApellido;
    if(!isNaN(parseInt(nombre)) || !isNaN(parseInt(apellido))){
        if(nombre!=="" && apellido!==""){
            eliminarDiv("inicio");
            eliminarDiv("insiste");
            activarDiv("nonumero");
        }else{
            eliminarDiv("inicio");
            eliminarDiv("nonumero");
            activarDiv("insiste");
        }   
    }else{
        if(nombre!=="" && apellido!==""){
            eliminarDiv("inicio");
            eliminarDiv("insiste");
            activarDiv("nonumero");
            eliminarDiv("solohazlo");
        }else{
            eliminarDiv("inicio");
            eliminarDiv("nonumero");
            activarDiv("insiste");
        }  
    }
}