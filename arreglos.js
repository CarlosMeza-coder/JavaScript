const autores = [
  {
    id: 1,
    nombre: "Gabriel García Márquez",
    nacionalidad: "Colombiana",
    obrasVendidasM: 50,
    premioNobel: true,
    obraDestacada: { titulo: "Cien años de soledad", anio: 1967 },
  },
  {
    id: 2,
    nombre: "J.K. Rowling",
    nacionalidad: "Británica",
    obrasVendidasM: 500,
    premioNobel: false,
    obraDestacada: { titulo: "Harry Potter y la piedra filosofal", anio: 1997 },
  },
  {
    id: 3,
    nombre: "George Orwell",
    nacionalidad: "Británica",
    obrasVendidasM: 40,
    premioNobel: false,
  },
  {
    id: 4,
    nombre: "Mario Vargas Llosa",
    nacionalidad: "Peruana",
    obrasVendidasM: 30,
    premioNobel: true,
    obraDestacada: { titulo: "La ciudad y los perros", anio: 1963 },
  },
  {
    id: 5,
    nombre: "Haruki Murakami",
    nacionalidad: "Japonesa",
    obrasVendidasM: 20,
    premioNobel: false,
    obraDestacada: { titulo: "Tokio blues", anio: 1987 },
  },
  {
    id: 6,
    nombre: "Isabel Allende",
    nacionalidad: "Chilena",
    obrasVendidasM: 75,
    premioNobel: false,
    obraDestacada: { titulo: "La casa de los espíritus", anio: 1982 },
  },
];

const filtrados = autores.filter(({ premioNobel }) => premioNobel);

const total = autores.reduce(
  (acumulador, { obrasVendidasM }) => acumulador + obrasVendidasM,
  0,
);

const promedio = total / autores.length;

const ordenados = [...autores].sort(
  (a, b) => b.obrasVendidasM - a.obrasVendidasM,
);

const autorBuscado = autores.find(({ id }) => id === 1);

const haySuperVentas = autores.some(
  ({ obrasVendidasM }) => obrasVendidasM > 100,
);

const todosTienenVentas = autores.every(
  ({ obrasVendidasM }) => obrasVendidasM > 0,
);

const resumenAutores = autores.map(({ nombre, obraDestacada }) => {
  const tituloObra = obraDestacada?.titulo ?? "Obra no registrada";
  return `${nombre}: ${tituloObra}`;
});

console.log({ filtrados, total, promedio, ordenados });
console.log({ autorBuscado, haySuperVentas, todosTienenVentas });
console.log(resumenAutores);
console.log("Arreglo original inmutable:", autores);
