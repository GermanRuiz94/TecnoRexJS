const precioelement = document.getElementById("precio");
const unidadeselement = document.getElementById("unidades");
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
                actualizartotales()
            })
            nuevoArticulo
            .getElementsByTagName("button")[0]
            .addEventListener("click",(e) =>{ 
                restaralcarrito(producto)
                crearTarjetasProductosInicio();
                actualizartotales()
            })
    });
}

crearTarjetasProductosInicio();
actualizartotales()

function actualizartotales() {
    const productos = JSON.parse(localStorage.getItem("Articulos"))
    let unidades = 0
    let precio = 0
    if(productos && productos.lenght > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadeselement.innerText = unidades;
        precioelement.innerText = precio;
    }
}

function revisarmensajevacio() {
    const productos = JSON.parse(localStorage.getItem("Articulos"))
    carritovacioelement.classList.toggle("esconder", !productos && productos.lenght >0)
    totaleselement.classList.toggle("esconder", productos && productos.lenght >0)
}

revisarmensajevacio()