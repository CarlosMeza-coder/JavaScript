function crearContador() {
  let contador = 0;

  return {
    incrementar: function () {
      contador++;
      return contador;
    },
    obtenerValor: function () {
      return contador;
    },
  };
}
const miContador = crearContador();
console.log("Primer incremento:", miContador.incrementar());
console.log("Segundo incremento:", miContador.incrementar());
console.log("Valor actual:", miContador.obtenerValor());
