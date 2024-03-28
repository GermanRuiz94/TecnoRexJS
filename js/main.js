//  FUNCION

// function saludar () {
//     return "BIENVENIDOS A TECNOREX"
// }

// const saludo = saludar()
// console.log (saludo)


// CICLO

// let tienda = true

// while (tienda) {
//     let menu = parseInt(prompt("\n Ingrese 1 para comprar auriculares \n Ingrese 2 para comprar mandos \n Ingrese 3 para contactarnos \n Ingrese 4 para ver nuestros streamings"))
    

//     switch(menu) {
//         case 1 : 
        
//         do {
//             tienda = parseInt(prompt("Escriba cuantos auriculares quiere"))
//             if (tienda>=0) {
//                 console.log("Tenemos Stock")
//             } else {
//                 console.log("No tenemos Stock")
//             }
//         } while (tienda >= 0)
//         break

//         case 2 : 
        
//         do {
//             tienda = parseInt(prompt("Escriba cuantos mandos quiere"))
//             if (tienda>=0) {
//                 console.log("Tenemos Stock")
//             } else {
//                 console.log("No tenemos Stock")
//             }
//         } while (tienda >= 0)
//         break

//         case 3 : 
//         console.log("NUESTRAS REDES  FACEBOOK: TECNOREX")
//         break

//         case 4 :
//         console.log("TWITCH: @TECNOREXJUEGA")
//         break

//         default:
//         console.log("ELIGUE UNA OPCION CORRECTA")
//         break

//     } 
    
//     let confirmar = prompt("Desea hacer otra consulta? (si/no)").toLowerCase()
//     if (confirmar == "no") {
//         tienda = false
//         console.log("MUCHAS GRACIAS POR CONFIAR EN TECNOREX!")
//     }
// } 
// alert ("QUE TENGA BUEN DIA!")


// // ARRAYS - PRODUCTOS  - CLASS

// const preciodolar = 1020
// class Auricular {
//     static id = 0
//     constructor (marca, modelo, precio) {
//         this.id = ++Auricular.id
//         this.modelo = modelo,
//         this.marca = marca,
//         this.precio = precio
//     }

//     enpesos = () =>  {
//         this.precio = this.precio*preciodolar
//         console.log ("Precio en pesos: $" +this.precio)
//     }

// }

// const productos = []
// cargarproductos = () => {
//     let cargamarca = prompt ("Ingrese la marca de los productos")
//     let cargamodelo = prompt ("Ingrese el modelo de los productos")
//     let cargaprecio = parseInt (prompt ("Ingrese el precio de los productos en dolares"))

//     const auriculares = new Auricular (cargamarca, cargamodelo, cargaprecio)
//     console.log (auriculares)
//     productos.push (auriculares)
// }

// verproductos = () => {
//     if (productos.length ===0) {
//         console.log ("No hay productos añadidos")
//      } else {
//         for (const producto of productos) {
//             console.log (producto)
//         }
//      }
// }

// let menu = parseInt (prompt ("Ingrese 1 para ver el catalogo el articulos, ingrese 2 para cargar los articulos, ingrese 3 para salir"))

// while (menu !==3) {
//     switch (menu) {
//         case 1:
//             verproductos ()
//         break

//         case 2:
//             cargarproductos ()
//         break

//         default:
//             alert ("Opcion incorrecta")
//             break
//     }

//     menu = parseInt (prompt ("Ingrese 1 para ver el catalogo de productos, ingrese 2 para cargar los productos, ingrese 3 para salir"))

// }


