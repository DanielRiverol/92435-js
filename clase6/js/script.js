// función constructora
function Libro(titulo, autor, anio, isbn, disponible) {
  this.titulo = titulo;
  this.autor = autor;
  this.anio = anio;
  this.isbn = isbn;
  this.disponible = disponible;

  this.mostrarInfo = function () {
    return `Titulo: ${this.titulo}, autor: ${this.autor}`;
  };
  this.prestar = function () {
    if (this.disponible) {
      this.disponible = false;
    }
  };
  this.devolver = function () {
    this.disponible = true;
  };
}

const libro = new Libro(
  "harry potter 1",
  "jk rowling",
  1997,
  123456765432,
  true,
);

console.log(libro.mostrarInfo());

const libro2 = new Libro(
  "el señor de los anillos",
  "jrr tolkien",
  1954,
  907667383987,
  true,
);

// console.log(libro2.mostrarInfo());
// libro2.prestar();
// console.log(libro.disponible);

// libro.prestar();
// console.log(libro.disponible);

// clases
class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
    this.catalogo = [];
  }
  getNombre() {
    return this.nombre;
  }

  agregarLibro(libro) {
    this.catalogo.push(libro);
    console.log(`Libro agregado con éxito ${libro.titulo}`);
  }

  // realizar ver catalogo
}

const biblioteca = new Biblioteca("Biblioteca Nacional");

// console.log(biblioteca.nombre);
// console.log(biblioteca.getNombre());

biblioteca.agregarLibro(libro);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(
  new Libro("frankenstein", "mary shelley", 1834, 123456456789, true),
);
console.log(biblioteca.catalogo);
