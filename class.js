class Personaje {
  #nivel;

  constructor(nombre, nivelInicial = 1) {
    this.nombre = nombre;
    this.#nivel = nivelInicial;
  }

  get nivel() {
    return this.#nivel;
  }

  set nivel(nuevoNivel) {
    if (nuevoNivel > 0) {
      this.#nivel = nuevoNivel;
    } else {
      console.log(" Error: El nivel debe ser mayor a 0.");
    }
  }

  atacar() {
    return `${this.nombre} realiza un ataque básico.`;
  }
}

class Mago extends Personaje {
  constructor(nombre, nivelInicial, mana) {
    super(nombre, nivelInicial);
    this.mana = mana;
  }

  lanzarHechizo() {
    return `${this.nombre} lanza un hechizo usando ${this.mana} de maná.`;
  }
}

const miMago = new Mago("Geralt", 5, 50);

console.log(miMago.atacar());
console.log(miMago.lanzarHechizo());

console.log("Nivel actual (Getter):", miMago.nivel);
miMago.nivel = 10;
console.log("Nuevo nivel (Getter):", miMago.nivel);

miMago.nivel = -2;
