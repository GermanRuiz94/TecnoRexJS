
let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById ("cart-section")

function renderCarrito (cardItems) {
    cardItems.forEach(producto => {
        const cart= document.createElement("div")
        cart.innerHTML = `<h3>${producto.nombre}</h3>
                        <img src= "${producto.img}" 
                          <p>${producto.precio}</p>`
    cartContainer.appendChild(cart)
        
    });
}

renderCarrito(cartStorage)