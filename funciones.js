window.onload  = function(){
    document.getElementById("primero").onclick = seleccionarPrimero;
    document.getElementById("segundo").onclick = seleccionarSegundo;
    document.getElementById("nombre-apellido").onclick = nickname;
    document.getElementById("sendMessage").onclick = enviar;
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
function eliminarDiv(divNone){
    return document.getElementById(divNone).style.display="none";

}function activarDiv(divInitial){
    return document.getElementById(divInitial).style.display="initial";

}
function nickname(){
    var nombre = document.getElementById("firstName").value;
    var apellido = document.getElementById("lastName").value;
    var v1 = nombre.toUpperCase();
    var v2=apellido.toUpperCase();
    fN=nombre.replace(nombre[0],v1[0]);
    lN=apellido.replace(apellido[0],v2[0]);
    iniciales=v1[0]+v2[0];
    userTittle = fN+" "+lN;
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
function enviar(){
    texto = document.getElementById("msg-text").value;
    console.log(userTittle+" (alias "+iniciales+") ha escrito: "+texto);
    document.getElementById("msg-text").value="";
}