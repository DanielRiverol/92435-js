// console.log("Hoy, funciones!");

// declaracion
function saludar() {
  // cuerpo de la funcion
  console.log("Hola, como estas?");
}
// invocacion
// for (let i = 0; i < 5; i++) {
//     saludar()
// }

function saludarConNombre(nombre, estadoClima) {
  console.log(
    "Hola, " + nombre + " como estas?" + "el día está: " + estadoClima,
  );
}
// saludarConNombre("Bianca", "nublado"); //argumento
// saludarConNombre("Enzo", "soleado");
// saludarConNombre("Soleado","Thomas");
// funcion con parametros
// let nombre = prompt("Decime tu nombre:");
// let clima = prompt("Como esta el dìa?:");
// saludarConNombre(nombre, clima);

//  funcion anonima

// const sumar = function (num1, num2) {
//   if (isNaN(num1) || isNaN(num2)) {
//     console.log("debes ingresa numeros");
//   } else {
//     console.log(num1 + num2);
//   }
// };
// let num1 = Number(prompt("Ingresa el primer numero"));
// let num2 = Number(prompt("Ingresa el segundo numero"));
// sumar(num1, num2);

// // sumar = "hola mundo";
// // console.log(sumar);

//return
let resultado = 0; //global

const sumar = function (num1, num2) {
  let resultado = num1 + num2;
  return resultado;
};
const restar = function (num1, num2) {
  let resultado = num1 - num2;
  return resultado;
};

console.log(sumar(4, 3));
console.log(restar(4, 3));

// console.log(resultado);

// let resSuma1 = sumar(3, 6);

// console.log(resSuma1);
// let resSuma2= sumar(resSuma1,"once")
// console.log(resSuma2);

// funcion flecha ()=>

const calcular = (num1, num2, op) => {
  switch (op) {
    case "+":
        return num1 + num2
    case "-":
        return num1 - num2
    case "*":
        return num1 * num2
    case "/":
        if(num2 == 0)return "Error"
        return num1 / num2//validar 
  
    default:
        return "ERROR"
        break;
  }
};

console.log(calcular(54,23,"+"));
console.log(calcular(54,23,"-"));
console.log(calcular(54,23,"*"));
console.log(calcular(54,10,"/"));
console.log(calcular(54,23,"a"));
