let contenedor = document.getElementById("productos-container")

fetch("../db/data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
      const nuevoproducto = document.createElement("div");
      nuevoproducto.classList = "tarjeta-producto"
      nuevoproducto.innerHTML = `
                                <img src="../img/productos/${producto.id}.png" alt="articulos">
                                <h3>${producto.nombre}</h3>
                                <p class="precio">$${producto.precio}</p>
                                <button class="productoAgregar" id="${producto.id}">Agregar al carrito</button>`
      contenedor.appendChild(nuevoproducto);
      nuevoproducto.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
    });
    addtocartbutton()
  })

function addtocartbutton() {
  addbutton = document.querySelectorAll(".productoAgregar")
  addbutton.forEach(button => {
    button.onclick = (e) => {
      Toastify({
        text: "Producto añadido al carrito",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #3c7ebc, #3c7ebf)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    }
  })
}
