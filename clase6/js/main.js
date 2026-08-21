// objetos literales {}
// const personaje = {
//   nombre: "juanito",
//   apellido: "arcoiris",
//   telefono: "+54924353456",
//   edad: 8,
//   hobbies: ["cantar", "bailar"],
// };
// console.log(personaje.hobbies[0]);
// notacion de punto (.)
// console.log(personaje);
// console.log(personaje.nombre);
// console.log(personaje.apellido);
// console.log(personaje.telefono);
// console.log(personaje.edad);
// console.log(personaje.email);
const personaje1 = {
  nombre: "lisa",
  apellido: "simpson",
  telefono: "+5492435324",
  edad: 8,
};
// notacion de corchetes
// console.log(personaje1);
// console.log(personaje1["edad"]);
// console.log(personaje1["nombre"]);
// console.log(personaje1["apellido"]);
// console.log(personaje1["email"]);

const libro = {
  titulo: "harry potter 1",
  autor: "jk rowling",
  anio: 1997,
};

// console.log(libro);

const libro1 = {
  titulo: "harry potter 2",
  autor: "jk rowling",
  anio: 1998,
};
// console.log(libro1);

const libro2 = {
  titulo: "harry potter 3",
  autor: "jk rowling",
  anio: 2000,
  disponible: true,
  // metodo de un objeto
  // mostrarInfo: function (){
  //   return "Información del libro"
  // }
  mostrarInfo() {
    // interpolacion
    // this.propiedad = obj.propiedad
    return `Titulo: ${this.titulo}, autor: ${this.autor}`;
  },
  prestar() {
    if (this.disponible) {
      this.disponible = false;
    }
  },
  devolver() {
    this.disponible = true;
  },
};
/** 
 * libro2.mostrarInfo()
       ↓
     this
       ↓
     libro2
*/
// console.log(libro2.mostrarInfo());
// console.log(libro2.disponible);
// libro2.prestar()
// console.log(libro2.disponible);
// libro2.devolver()
// console.log(libro2.disponible);

// reasignar valores alas propiedades
// const personaje = {
//   nombre: "juanito",
//   apellido: "arcoiris",
//   telefono: "+54924353456",
//   edad: 8,
//   hobbies: ["cantar", "bailar"],
// };
// console.log(personaje.telefono);

// personaje.telefono = "+12345678765"
// console.log(personaje.telefono);
// personaje.email = "juani@mail.com";
// console.log(personaje.email);
