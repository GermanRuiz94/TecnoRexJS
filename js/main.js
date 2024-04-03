const productos = [
    {
        id: 1,
        nombre: "Consola Play Station 5",
        precio: 500,
        img : "./images/ps5-spideman2tiendafinal.jpg"
    },
    
    {
        id: 2,
        nombre: "Dualsense PS5",
        precio: 70,
        img: "./images/duaalsense.jpg"
    },

    {
        id: 3,
        nombre: "Auriculares Pulse 3D",
        precio: 100,
        img: "./images/Pulse-3d-tienda.jpg"
    },

    {
        id: 4,
        nombre: "Mando Xbox Series X",
        precio: 70,
        img: "./images/xbox-mando.jpg"
    },

    {
        id: 5,
        nombre: "Auriculares Xbox Wireless",
        precio: 200,
        img: "./images/xbox-auris.jpg"
    },
    
    {
        id: 6,
        nombre: "Auriculares BlackShark V2 HyperSpeed",
        precio: 150,
        img: "./images/razer-blackshark-v2-hyperspeed.jpg"
    },
]


let cartProducts
let cartProductsLS = localStorage.getItem("cartProducts")
if (cartProductsLS) {
    cartProducts = JSON.parse(cartProductsLS)
}else {
    cartProducts = []
}

let productsContainer = document.getElementById("products-container")

function renderProducto(productosArray) {
    productosArray.forEach ((producto) => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                        <img src= "${producto.img}"                  
                        <p>${producto.precio}</p>
                        <button class="productoAgregar" id="${producto.id}">Agregar al carrito</button>
                       `
                        
        productsContainer.appendChild(card)
    })
    addToCartButton ()
}
renderProducto(productos)

function addToCartButton () {
    let addbutton = document.querySelectorAll(".productoAgregar")
    addbutton.forEach (button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id 
            const selectedroduct = productos.find ((producto) => producto.id == productId)
            cartProducts.push (selectedroduct)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}