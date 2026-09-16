//CLASE PRODUCTO
class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

//ARRAY DE PRODUCTOS
const productos = [
  new Producto(1, "Auriculares Sony", 15000, 10),
  new Producto(2, "Auriculares JBL", 12000, 15),
  new Producto(3, "Teclado Mecánico Redragon", 25000, 5),
  new Producto(4, "Teclado Inalámbrico Logitech", 18000, 8),
  new Producto(5, "Mouse Gamer Razer", 30000, 12),
  new Producto(6, "Mouse Inalámbrico Genius", 5000, 20),
  new Producto(7, "Monitor Samsung 24 pulgadas", 85000, 4),
  new Producto(8, "Monitor LG 27 pulgadas", 95000, 3),
  new Producto(9, "Silla Gamer Corsair", 150000, 2),
  new Producto(10, "Silla de Oficina Ergonómica", 80000, 5),
  new Producto(11, "Webcam Logitech C920", 45000, 8),
  new Producto(12, "Webcam Redragon Hitman", 32000, 15),
  new Producto(13, "Micrófono HyperX QuadCast", 110000, 4),
  new Producto(14, "Micrófono Condensador Blue Yeti", 125000, 2),
  new Producto(15, "Pad Mouse HyperX XL", 18000, 25),
  new Producto(16, "Pad Mouse Razer Goliathus", 22000, 10),
  new Producto(17, "Auriculares HyperX Cloud Flight", 85000, 7),
  new Producto(18, "Teclado Mecánico Corsair K70", 130000, 3),
  new Producto(19, "Monitor Asus 144hz 24 pulgadas", 210000, 5),
  new Producto(20, "Silla Gamer AKRacing", 280000, 1),
];
const contenedorProductos = document.getElementById("productos-container");
const inputBusqueda = document.getElementById("searchInput");
const btnFind = document.getElementById("btnFind");
const btnFilter = document.getElementById("btnFilter");
const btnReset = document.getElementById("btnReset");

const modal = document.getElementById("modalMensaje");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const btnCerrarModal = document.getElementById("btnCerrarModal");

function mostrarModal(titulo, mensaje) {
  modalTitulo.textContent = titulo;
  modalTexto.textContent = mensaje;
  modal.showModal();
}

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

// Funciones de busqueda
const buscarConFind = (productos, palabra) => {
  const palabraBuscada = palabra.toLowerCase();
  return productos.find((producto) =>
    producto.nombre.toLowerCase().includes(palabraBuscada),
  );
};
const buscarConFilter = (productos, palabra) => {
  const palabraBuscada = palabra.toLowerCase();
  return productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(palabraBuscada),
  );
};






