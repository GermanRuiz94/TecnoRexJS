const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.classList = "tarjeta-producto";
        nuevoArticulo.innerHTML =  `
                                    <img src="../img/${producto.img}">
                                    <h3>${producto.nombre}</h3>
                                    <p>$${producto.precio}</p>
                                    <button>Agregar al Carrito</button> 
                                    `
        contenedorTarjetas.appendChild(nuevoArticulo);
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click",() => agregaralcarrito(producto))
    });
}

crearTarjetasProductosInicio(articulos);