//  FUNCION

// function saludar () {
//     return "BIENVENIDOS A TECNOREX"
// }

// const saludo = saludar()
// console.log (saludo)


// CICLO

let tienda = true

while (tienda) {
    let menu = parseInt(prompt("\n Ingrese 1 para comprar auriculares \n Ingrese 2 para comprar mandos \n Ingrese 3 para contactarnos \n Ingrese 4 para ver nuestros streamings"))
    

    switch(menu) {
        case 1 : 
        
        do {
            tienda = parseInt(prompt("Escriba cuantos auriculares quiere"))
            if (tienda>=0) {
                console.log("Tenemos Stock")
            } else {
                console.log("No tenemos Stock")
            }
        } while (tienda >= 0)
        break

        case 2 : 
        
        do {
            tienda = parseInt(prompt("Escriba cuantos mandos quiere"))
            if (tienda>=0) {
                console.log("Tenemos Stock")
            } else {
                console.log("No tenemos Stock")
            }
        } while (tienda >= 0)
        break

        case 3 : 
        console.log("NUESTRAS REDES  FACEBOOK: TECNOREX")
        break

        case 4 :
        console.log("TWITCH: @TECNOREXJUEGA")
        break

        default:
        console.log("ELIGUE UNA OPCION CORRECTA")
        break

    } 
    
    let confirmar = prompt("Desea hacer otra consulta? (si/no)").toLowerCase()
    if (confirmar == "no") {
        tienda = false
        console.log("MUCHAS GRACIAS POR CONFIAR EN TECNOREX!")
    }
} 
alert ("QUE TENGA BUEN DIA!")


// ARRAYS - PRODUCTOS 

// let articulos = ["pulse 3d","xbox wireless","razer blackshark x usb","dualsense","consolas"]

// const articulo1 = {
//     marca: "Sony",
//     modelo: "Pulse 3d",
//     objeto: "auriculares",
//     año: 2022
// }

// const articulo2 = {
//     marca: "Razer",
//     modelo: "BlackShark",
//     objeto: "auriculares",
//     año: 2022 

// }

// const articulo3 = {
//     marca: "Sony",
//     modelo: "Dualsense",
//     objeto: "mando",
//     año: 2022 
// }

// const articulo4 = {
//     marca: "Xbox",
//     modelo: "Series X",
//     objeto: "consola",
//     Almacenamiento: 1000,
//     año: 2022 
// }


// const electronicos = [articulo1,articulo2,articulo3,articulo4]

// const AddElement = () => {
//     const marca = prompt ("Eliga una marca Sony / Xbox / Razer")
//     const modelo = prompt ("Eliga un modelo Dualsense / Series X / Pulse 3d")
//     const objeto = prompt ("Eliga entre Auriculares / Mandos / Consola")
//     const año = prompt ("Eliga un año 2022 / 2023")

//     const convocado = {
//         marca: marca,
//         modelo: modelo,
//         objeto: objeto,
//         año: año
//     }
//     electronicos.push(articulos)
// }
// AddElement ()
// console.log(articulos);