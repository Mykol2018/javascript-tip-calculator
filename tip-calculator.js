//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //validar la entrada
  if (billAmt === "" || serviceQual == 0) {
    alert("Entrar valores");
    return;
  }
  //Vemos si el campo está vacio o inferior o igual a 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calcular la propina
  var total = (billAmt * serviceQual) / numOfPeople;
  //solo dos decimales
  total = Math.round(total * 100) / 100;
  //siempre guardamos 2 digitos despues del punto decimal
  total = total.toFixed(2);
  //Mostrar la propina
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Escondemos la propina al inicio
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Llamar la función al hacer clic
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
