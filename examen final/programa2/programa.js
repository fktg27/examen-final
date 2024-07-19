//elementos del dom//
var boton = document.querySelector("button");
    color = document.getElementById("color");

//definicion de funciones//
function generarcolor() {
 var digitos = "0123456789abcdef";
     colorhex ="#";
//generador de valores aleatorios//
for(let i=0;i<6;i++){
  let indicealeatorio=Math.floor(Math.random() *16);
  colorhex += digitos[indicealeatorio];
}

return colorhex;

}
//obtener la funcion con el click//
boton.addEventListener("click",function(){
  var coloraleatorio=generarcolor();
  //actualizacion del texto//
  color.textContent=coloraleatorio;
  //actualizacion del color de fondo//
  document.body.style.backgroundColor=coloraleatorio;
  //actualizacion del color del boton al mismo color de fondo//
  boton.style.backgroundColor=coloraleatorio;
})