function validarNumero(valor, nombre) {
  if (typeof valor !== "number" || Number.isNaN(valor) || valor <= 0) {
    throw new Error(
      `${nombre} debe ser un número mayor que 0 (recibido: ${valor})`,
    );
  }
}

function calcularIMC(peso, altura) {
  validarNumero(peso, "El peso");
  validarNumero(altura, "La altura");
  return peso / (altura * altura);
}

function clasificarIMC(imc) {
  if (imc < 18.5) return "Bajo peso";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidad";
}

function mostrarIMC(peso, altura) {
  try {
    const imc = calcularIMC(peso, altura);
    console.log(
      `Peso: ${peso} kg | Altura: ${altura} m | IMC: ${imc.toFixed(2)} → ${clasificarIMC(imc)}`,
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
