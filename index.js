

let totalcompra = 0
let producto  = parseInt (prompt("Ingresa el código del juego qué deseas comprar. Gastando $3000 o más, tienes un descuento del 10%. Gastando $5000 o más tienes un descuento del 20%. \n 1. Skyrim \n 2. Elden Ring \n 3. Resident Evil \n 4. Ghost of Tsushima \n 5. Witcher 3")
)

let comprar = true
let pregunta


while (comprar===true) {
    if (producto===1) 
    {totalcompra = totalcompra + 1500 }
    else if (producto===2)
    {totalcompra = totalcompra + 1000 }
    else if (producto===3)
    {totalcompra = totalcompra + 2000 }
    else if (producto===4)
    {totalcompra = totalcompra + 1700 }
    else if (producto===5)
    {totalcompra = totalcompra + 2500 }
    else {producto = parseInt (prompt("Lo siento, no has seleccionado ninguno de los juegos disponibles. Por favor, Ingresa el código del juego qué deseas comprar. Gastando $3000 o más, tienes un descuento del 10%. Gastando $5000 o más tienes un descuento del 20%. \n 1. Skyrim \n 2. Elden Ring \n 3. Resident Evil \n 4. Ghost of Tsushima \n 5. Witcher 3"))
}
    

    pregunta  = parseInt (prompt ( "¿Quieres agregar otro juego a tu compra? \n 1. Si \n 2. No") )

    if (pregunta=== 1)
    { producto  = parseInt (prompt("Ingresa el código del juego qué deseas comprar. Gastando $3000 o más, tienes un descuento del 10%. Gastando $5000 o más tienes un descuento del 20%. \n 1. Skyrim \n 2. Elden Ring \n 3. Resident Evil \n 4. Ghost of Tsushima \n 5. Witcher 3")
    )
    }
    
    else if (pregunta===2) 
    {comprar=false } 

}    


alert ("El valor total de tu compra sin el descuento ni impuestos es de :"+totalcompra)


function calcularPrecioConDescuento (valor) {
    
 let descuento = 0
     if (valor<3000)
     {descuento = 0}
     else if (valor>=3000 && valor<5000)
     {descuento = 10}
     else if (valor>=5000)
     {descuento = 20}
        

         let valorDescuento = valor * (descuento / 100)
         valor = valor - valorDescuento
         return valor
     }
     let valorConDescuento = calcularPrecioConDescuento(totalCompra)
     alert('El total con descuento sin impuestos es: ' + valorConDescuento)
     
     function calcularPrecioConImpuesto(valor) {
         const impuestos = valor * (8 / 100)
         return valor + impuestos
     }
     
     let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
     alert('Total a pagar: ' + valorFinalConImpuesto)














