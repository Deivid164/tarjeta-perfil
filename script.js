// Referencias a elementos del DOM
let modoBtn = document.getElementById("modoBtn");
let modoTarjeta = document.querySelector(".tarjeta");

// Al cargar la página, revisamos si había un modo guardado
let modoGuardado = localStorage.getItem("modo");

if (modoGuardado === "oscuro") {
  modoTarjeta.classList.add("oscuro");
  modoBtn.textContent = "☀️ Modo claro";
}

// Alternar modo oscuro/claro al hacer clic
modoBtn.addEventListener("click", () => {
  modoTarjeta.classList.toggle("oscuro");

  if (modoTarjeta.classList.contains("oscuro")) {
    modoBtn.textContent = "☀️ Modo claro";
    localStorage.setItem("modo", "oscuro");
  } else {
    modoBtn.textContent = "🌙 Modo oscuro";
    localStorage.setItem("modo", "claro");
  }
});