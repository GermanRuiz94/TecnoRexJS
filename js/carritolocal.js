function agregaralcarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("Articulos"));
    console.log(memoria)
    let cuenta = 0
    if(!memoria) {
        const nuevoProducto = nuevoproductoparamemoria(producto)
        localStorage.setItem("Articulos",JSON.stringify([nuevoProducto]))
        cuenta = 1
    } else {
        const inidiceproducto = memoria.findIndex(articulos => articulos.id === producto.id)
        console.log (inidiceproducto)
        const nuevamemoria = memoria;
        if (inidiceproducto === -1) {
            nuevamemoria.push(nuevoproductoparamemoria(producto))
            cuenta = 1
        }else {
            nuevamemoria[inidiceproducto].cantidad ++;
            cuenta = nuevamemoria[inidiceproducto].cantidad
        }
        localStorage.setItem("Articulos",JSON.stringify(nuevamemoria))
    }
    actualizarnumerocarrito()
    return cuenta
}

// resta la cantidad y desaparece
function restaralcarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("Articulos"));
    const inidiceproducto = memoria.findIndex(articulos => articulos.id === producto.id);
    if(memoria[inidiceproducto].cantidad ===1) {
        memoria.splice(inidiceproducto,1)
    } else {
        memoria[inidiceproducto].cantidad--
    }
    localStorage.setItem("Articulos",JSON.stringify(memoria))
    actualizarnumerocarrito()
}

// Toma un producto, le agrega 1 y lo devuelve
    function nuevoproductoparamemoria(producto) {
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        return nuevoProducto;
    }

const cuentacarritoelement = document.getElementById("cuenta-carrito")
function actualizarnumerocarrito() {
    const memoria = JSON.parse(localStorage.getItem("Articulos"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
    cuentacarritoelement.innerText = cuenta;
}

actualizarnumerocarrito();