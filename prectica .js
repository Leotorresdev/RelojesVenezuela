
//!condicionales

// Escribe tu solución aquí
const verificarAcceso = (edad) => {
    if (edad >= 18) {
        return "Acceso permitido";
    }
    return "Acceso denegado";
}

// Pruébala con estos casos:
console.log(verificarAcceso(20))  // "Acceso permitido"
console.log(verificarAcceso(15))  // "Acceso denegado"
console.log(verificarAcceso(18))  // "Acceso permitido"

const clasificarNota = (nota) => {
 if(nota >= 90) {
    return "Excelente"
 }
 if(nota >= 60){ 
    return "aprobado"
 }
 return "Reprobado"
}
// Pruébala con estos casos:
console.log(clasificarNota(95))  // "Excelente"
console.log(clasificarNota(75))  // "Aprobado"
console.log(clasificarNota(40))  // "Reprobado"

/*const Mensaje = ({ isLoading, isLoggedIn }) => {
  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : isLoggedIn ? (
        <p> Bienvenido </p>
      ) : (
        <p> Inicia sesión </p>
      )}
    </div>

  )
}
*/

//?funciones
const calcularDescuento = (precio, porcentaje) => {
    const descuento = ( precio * porcentaje) / 100;
    return precio - descuento;
}

// Pruébala con estos casos:
console.log(calcularDescuento(100, 10))  // 90
console.log(calcularDescuento(200, 25))  // 150
console.log(calcularDescuento(50, 50))   // 25

const saludarUsuario = (nombre, esPremium) => {
    if (esPremium){
        return `Hola ${nombre}, bienvenido a Premium`
    }
    return `Hola ${nombre}, bienvenido`


}

// Pruébala:
console.log(saludarUsuario("Carlos", true))   // "Hola Carlos, bienvenido a Premium"
console.log(saludarUsuario("María", false))   // "Hola María, bienvenido"

const productos = [
  { nombre: "Camiseta", precio: 29 },
  { nombre: "Pantalón", precio: 59 },
  { nombre: "Zapatos",  precio: 89 },
]


const calcularCarrito = (productos) => {
  // Pista: necesitas recorrer el array y ir sumando cada precio
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio;
    }
    return total;
}
console.log(calcularCarrito(productos)) // 177

//?bucles
const contarVocales = (texto) => {
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

// Pruébala con estos casos:
console.log(contarVocales("Hola Mundo"))  // 4
console.log(contarVocales("JavaScript"))   // 3
console.log(contarVocales("AEIOU"))        // 5

const esPar = ()
