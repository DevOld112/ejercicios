/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 
*/
 

const reverseInt = (num) => {
    const str = num.toString()

    //Solucion 1: ciclo for sin funciones nativas del lenguaje

    const arr = [...str]
    let result = []
    

    for(let count = arr.length - 1; count >= 0; count--){
        result.push(arr[count])
    }
    
    if(num < 0){
        return -parseInt(result.join(""))
    } else {
        return parseInt(result.join(""))
    }
}

console.log(reverseInt(-1004))