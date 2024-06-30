/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/


const addTwo = (arrNumber, num) => {

    let result = []

    let random1 = 0
    let random2 = 0

    for(let i = 0; i < 10000; i++){
        random1 = Math.floor(Math.random() * arrNumber.length)
        random2 = Math.floor(Math.random() * arrNumber.length)

        result.push(arrNumber[random1], arrNumber[random2])
        
        
        if(result[0] + result[1] === num && result[0] !== result[1]){
            console.log(result)
            return
        } else{
            result = []
        }
    }


    return console.log('No hay combinacion posible')
}

addTwo([4, 5, 2, 1], 6)