// const fs = require("fs")
import fs from "fs";

try {
  fs.writeFileSync("./archivo.txt", "Estoy trabajando con Node.js sincronico");
  console.log("Exito");

  const result = fs.readFileSync("./archivo.doc", "utf-8");
  console.log(result);
} catch (error) {
  console.error(error.message);
}
console.log("Esto lo vemos despues");
