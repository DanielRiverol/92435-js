//  escribir codigo linea por linea un abajo de la otra
// console.log("Tarea 1");
// // 1s = 1000ms
// setTimeout(()=>{
//     console.log("Tarea 2");

// },0)
// console.log("Tarea 3");
const cardPopup = document.querySelector("#card-popup");
const botonPopup = document.querySelector("#boton-popup");

botonPopup.addEventListener("click", () => {
  setTimeout(() => {
    cardPopup.classList.add("hide");
  }, 1500);
  cardPopup.classList.remove("hide");
});
// let contador = 0;
// let intervalo = setInterval(() => {
//   console.log("Ya mero?, Ya merito?");
//   contador += 1;
//   console.log(contador);
//   if(contador == 10){
//     clearInterval(intervalo)
//   }
// }, 1000);

// PROMESAS
const devolverCd = (respuesta) => {
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa

    setTimeout(() => {
      if (respuesta) {
        resolve("Si lo tengo en casa ya te devuelvo");
      } else {
        reject("No, lo perdi");
      }
    }, 1500);
  });
};

console.log("Hola Pablo, te acordas del cd que te presté?");

// devolverCd("")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   }).finally(()=>{
//     console.log("Dale, gracias");

//   });
const ejecutarPromesa = async (param) => {
  try {
    const response = await devolverCd(param);

    console.log(response);
  } catch (error) {
    console.error(error);
  }finally{
     console.log("Dale, gracias");
  }
};

ejecutarPromesa("si")
