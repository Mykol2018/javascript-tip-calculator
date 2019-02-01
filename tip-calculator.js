//Calculate Tip
function calculateTip() {
  var MontoCuenta = document.getElementById("MontoCuenta").value;
  var CualidadServicio = document.getElementById("CualidadServicio").value;
  var NumPersonas = document.getElementById("NumPersonas").value;

  //validar la entrada
  if (MontoCuenta === "" || CualidadServicio == 0) {
    alert("Entrar valores");
    return;
  }
  //Vemos si el campo está vacio o inferior o igual a 1
  if (NumPersonas === "" || NumPersonas <= 1) {
    NumPersonas = 1;
    document.getElementById("CadaUno").style.display = "none";
  } else {
    document.getElementById("CadaUno").style.display = "block";
  }

  //Calcular la propina
  var total = (MontoCuenta * CualidadServicio) / NumPersonas;
  //solo dos decimales
  total = Math.round(total * 100) / 100;
  //siempre guardamos 2 digitos despues del punto decimal
  total = total.toFixed(2);
  //Mostrar la propina
  document.getElementById("TotalPropina").style.display = "block";
  document.getElementById("Propina").innerHTML = total;

}

//Escondemos la propina al inicio
document.getElementById("TotalPropina").style.display = "none";
document.getElementById("CadaUno").style.display = "none";

//Llamar la función al hacer clic
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
