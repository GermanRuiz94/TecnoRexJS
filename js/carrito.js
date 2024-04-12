
const contenedorTarjetas = document.getElementById("productos-container");
const carritovacioelement = document.getElementById("carrito-vacio")
const totaleselement = document.getElementById("totales")

function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("Articulos"))
    console.log(productos)
    if (productos && productos.lenght > 0) {
        
    }
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.classList = "tarjeta-producto";
        nuevoArticulo.innerHTML =  `
                                    <img src="../img/${producto.img}">
                                    <h3>${producto.nombre}</h3>
                                    <p>$${producto.precio}</p>
                                    <div>
                                        <button>-</button>
                                        <span class="cantidad">${producto.cantidad}</span>
                                        <button>+</button>
                                    </div>  
                                    `
        contenedorTarjetas.appendChild(nuevoArticulo);
        nuevoArticulo
            .getElementsByTagName("button")[1]
            .addEventListener("click",(e) => {
                const cuentaelement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaelement.innerText = agregaralcarrito(producto)
          
            })
            nuevoArticulo
            .getElementsByTagName("button")[0]
            .addEventListener("click",(e) =>{ 
                restaralcarrito(producto)
                crearTarjetasProductosInicio();
               
            })
    });
}

crearTarjetasProductosInicio();