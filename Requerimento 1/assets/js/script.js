const imagen = document.getElementById("time");

imagen.addEventListener("click", function () {
  if (imagen.style.border) {
    imagen.style.border = "";
  } else {
    imagen.style.border = "2px solid red";
  }
});
