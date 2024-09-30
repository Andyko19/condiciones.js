function verificarPassword() {
  const cod1 = document.getElementById("number1").value;
  const cod2 = document.getElementById("number2").value;
  const cod3 = document.getElementById("number3").value;
  const clave = cod1 + cod2 + cod3;
  const resultado = document.getElementById("resultado");
  if (clave === "911") {
    resultado.textContent = "Password 1 correcto";
    resultado.style.color = "green";
  } else if (clave === "714") {
    resultado.textContent = "Password 2 correcto";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Password incorrecto";
    resultado.style.color = "red";
  }
}
