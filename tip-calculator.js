//Calculate Tip
function calculateTip() {
  var monto_cuenta = document.getElementById("monto_cuenta").value;
  var CualidadServicio = document.getElementById("CualidadServicio").value;
  var NumPersonas = document.getElementById("NumPersonas").value;

  //validar la entrada
  if (monto_cuenta === "" || CualidadServicio == 0) {
    alert("Entrar valores");
    return;
  }
  //Vemos si el campo está vacio o inferior o igual a 1
  if (NumPersonas === "" || NumPersonas <= 1) {
    NumPersonas = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calcular la propina
  var total = (monto_cuenta * CualidadServicio) / NumPersonas;
  //solo dos decimales
  total = Math.round(total * 100) / 100;
  //siempre guardamos 2 digitos despues del punto decimal
  total = total.toFixed(2);
  //Mostrar la propina
  document.getElementById("TotalPropina").style.display = "block";
  document.getElementById("propina").innerHTML = total;

}

//Escondemos la propina al inicio
document.getElementById("TotalPropina").style.display = "none";
document.getElementById("each").style.display = "none";

//Llamar la función al hacer clic
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
