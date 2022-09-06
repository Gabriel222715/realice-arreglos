let totalCompra = 0
let productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Pañales - 2.Vinos - 3.Verduras - 4.Carne'
  )
)
let seguirComprando = true
let decision 
let productos = []
while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    totalCompra = totalCompra + 4990
  } else if (productoSeleccionado === 2) {
    totalCompra = totalCompra + 8000
  } else if (productoSeleccionado === 3) {
    totalCompra = totalCompra + 14380
  } else if (productoSeleccionado === 4) {
    totalCompra = totalCompra + 6200
  } else{
    productoSeleccionado = parseInt(prompt('ingresa un producto existente: 1.Pañales - 2.Vinos- 3.Verduras - 4.Carne'))
    continue
  }
const pañales = {
  nombre :'Pañales',
  precio :4990,
}
productos.push(Pañales)
const vinos = {
  nombre :'Vinos',
  precio :8000, 
}
productos.push(Vinos)
const verduras = {
  nombre :'Verduras',
  precio :14380,
}
productos.push(Verduras)
const carne = {
  nombre :'Carne',
  precio :6200,
}
productos.push(Carne)

console.log(productos)
  decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt(
        'Ingresa el numero del producto que quieres comprar: 1.Heladera - 2.Plantas - 3.Atornilladora - 4.Escritorio'
      )
    )
  
  } else if (decision === 2) {
    seguirComprando = false
  }
}

alert('El valor total sin descuento ni impuestos es: '+totalCompra)

function calcularPrecioConDescuento(valor){
let descuento = 0
if(valor<=1000){
    descuento = 10
} else if(valor>1000 && valor<=1500){
    descuento = 15
} else if(valor>1500 && valor<=2000){
    descuento = 20
} else {
    descuento = 25
}
let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: '+valorConDescuento)

function calcularPrecioConImpuesto(valor){
    const impuestos = valor * (8/100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('El valor final a pagar es de: '+valorFinalConImpuesto)