// fnuction contructora
function Libro(titulo, autor, anio, isbn, disponible) {
  this.titulo = titulo; //libor1.titulo
  this.autor = autor; //libro.autor
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
    console.log(`Libro agrago con exito ${libro.titulo}`);
  }

//   realizar ver catalogo

}

const bilioteca1 = new Biblioteca("Biblioteca Nacional");

// console.log(bilioteca1.nombre);
// console.log(bilioteca1.getNombre());

bilioteca1.agregarLibro(libro)
bilioteca1.agregarLibro(libro2)
bilioteca1.agregarLibro(new Libro('frankesntien', "Mary Sheelly", 1834, 123456, true))
console.log(bilioteca1.catalogo);
