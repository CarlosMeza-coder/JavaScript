function validarN(n) {
  if (
    n === undefined ||
    n === null ||
    (typeof n === "string" && n.trim() === "")
  ) {
    throw new Error("El valor no puede estar vacio");
  }
  const num = typeof n === "string" ? Number(n) : n;
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new Error(`"${n}" no es un numero valido (NaN)`);
  }
  if (num < 0) {
    throw new Error("No se permiten numeros negativos");
  }
  if (num === 0) {
    throw new Error("El numero debe ser mayor que cero");
  }
  if (!Number.isInteger(num)) {
    throw new Error("No se permiten decimales");
  }
  return num;
}

function fizzBuzz(n) {
  try {
    const limite = validarN(n);
    for (let i = 1; i <= limite; i++) {
      if (i % 15 === 0) console.log(`${i}: FizzBuzz`);
      else if (i % 3 === 0) console.log(`${i}: Fizz`);
      else if (i % 5 === 0) console.log(`${i}: Buzz`);
      else console.log(`${i}`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
