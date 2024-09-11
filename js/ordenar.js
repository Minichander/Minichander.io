function ordena(){
    'Codigo para capturara¿ el valor'
    var a = parseInt(document.getElementById("txtUno").value);
    var b = parseInt(document.getElementById("txtDos").value);
    var c = parseInt(document.getElementById("txtTres").value);

//funcion a
if(a>b && a>c && b>c){
    document.getElementById("txtMayor").value = a;
    document.getElementById("txtMedio").value = b;
    document.getElementById("txtMenor").value = c;
}
else if(a<b && a>c && b>c){
    document.getElementById("txtMayor").value = b;
    document.getElementById("txtMedio").value = a;
    document.getElementById("txtMenor").value = c;
}
else if(a<b && a<c && b>c){
    document.getElementById("txtMayor").value = b;
    document.getElementById("txtMedio").value = c;
    document.getElementById("txtMenor").value = a;
}
else if(a>b && a<c && b<c){
    document.getElementById("txtMayor").value = c;
    document.getElementById("txtMedio").value = a;
    document.getElementById("txtMenor").value = b;
}
else if(a<b && a<c && b<c){
    document.getElementById("txtMayor").value = c;
    document.getElementById("txtMedio").value = b;
    document.getElementById("txtMenor").value = a;
}
else if(a>b && a>c && b<c){
    document.getElementById("txtMayor").value = a;
    document.getElementById("txtMedio").value = c;
    document.getElementById("txtMenor").value = b;
}
else{
    'falso'
}
}
