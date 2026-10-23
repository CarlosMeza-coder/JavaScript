const jugador = {
  nombre: "Carlos",
  vida: 100,

  mostrarNormal: function () {
    console.log("Función Normal -> Nombre:", this.nombre, "| Vida:", this.vida);
  },

  mostrarFlecha: () => {
    console.log(
      "Función Flecha  -> Nombre:",
      this.nombre,
      "| Vida:",
      this.vida,
    );
  },
};

jugador.mostrarNormal();
jugador.mostrarFlecha();
