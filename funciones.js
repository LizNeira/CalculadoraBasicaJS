function limpiar(){
    document.getElementById('miformulario').reset();
}
function sumar(){
    // parceint para pasar a enteros
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=x+y;

}
function restar(){
    // parceint para pasar a enteros
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=x-y;

}
function multiplicar(){
    // parceint para pasar a enteros
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=x*y;

}
function dividir(){
    // parceint para pasar a enteros
    var x=parseInt(document.getElementById('valor1').value);
    var y=parseInt(document.getElementById('valor2').value);
    if(x>0 && y>0){
         document.getElementById('resultado').innerHTML=x/y;
 
    }
    else{
        document.getElementById('resultado') .innerText="No se puede divirdir entre cero";
    }
  
}