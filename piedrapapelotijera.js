"use strict";

const posibilidadesOrdenador = ["piedra", "papel", "tijeras"];
let puntosUsuario = 0;
let puntosOrdenador = 0;

while (puntosUsuario < 3 && puntosOrdenador < 3) {
  const posicionAleatoria = Math.floor(Math.random() * 3);

  const eleccionOrdenador = posibilidadesOrdenador[posicionAleatoria];
  const eleccionUsuario = prompt("Piedra, Papel o Tijera 1,2,3 YA...");

  console.log("Eleccion del usuario :", eleccionUsuario);
  console.log("Eleccion del ordenador :", eleccionOrdenador);

  if (
    (eleccionOrdenador === "piedra" && eleccionUsuario === "tijeras") ||
    (eleccionOrdenador === "tijeras" && eleccionUsuario === "papel") ||
    (eleccionOrdenador === "papel" && eleccionUsuario === "piedra")
  ) {
    console.log("El ordenador gana");
    puntosOrdenador++;
  } else if (
    (eleccionOrdenador === "piedra" && eleccionUsuario === "papel") ||
    (eleccionOrdenador === "tijeras" && eleccionUsuario === "piedra") ||
    (eleccionOrdenador === "papel" && eleccionUsuario === "tijeras")
  ) {
    console.log("El usuario gana");
    puntosUsuario++;
  } else {
    console.log("Empate");
  }

  alert(`Usuario"${puntosUsuario} "Ordenador", ${puntosOrdenador}`);
}
