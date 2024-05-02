const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");
const comprarcarritoElement = document.getElementById("comprar-carrito");


/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("articulos"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `
    <img src="../img/productos/${producto.id}.png" alt="articulos">
    <h3>${producto.nombre}</h3>
    <span>$${producto.precio}</span>
    <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>+</button>
    </div>
    `;
      contenedorTarjetas.appendChild(nuevoProducto);
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = restarAlCarrito(producto);
          crearTarjetasProductosCarrito();
          actualizarTotales();
        });
      nuevoProducto
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("articulos"));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if(precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("articulos"));
  carritoVacioElement.classList.toggle("escondido", productos);
  totalesContainer.classList.toggle("escondido", !productos);
}

/** Opcion comprar para que elimine los productos del carrito */
comprarcarritoElement.addEventListener("click", comprarbotonclicked)

function comprarbotonclicked () {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
}

/** Opcion comprar para que aparezca el cartel de productos comprados */
// function botonagregar () {
//   comprarboton = document.querySelectorAll("#comprar-carrito")
//   comprarboton.forEach (boton => {
//     boton.onclick = (e) => {
//       Toastify({
//         text: "Gracias por su compra",
//         duration: 2000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: false,
//         gravity: "top", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: false, // Prevents dismissing of toast on hover
//         style: {
//         background: "linear-gradient(to right, #3c7ebc, #3c7ebf)",
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();
//     }
//   })
// }

// Swal.fire({
//   title: "desea vaciar el carrito?",
//   showDenyButton: true,
//   confirmButtonText: "Seguir comprando",
//   denyButtonText: `Vaciar carrito`
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) {
//     Swal.fire("Continuar comprando!", "Todos tus productos estan guardados", "success");
//   } else if (result.isDenied) {
//     Swal.fire("Carrito vacio", "selecciona los productos", "");
//   }
// });

