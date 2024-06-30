/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

const allPairs = (arr) => {
    //Declaro un contador de veracidad, si el count al final es igual al tamaño del arreglo, devolvera true

    let count = 0
    //Inicializo un ciclo for que recorra el arreglo arr

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 ===0){
            count += 1
        }
    }

    return count === arr.length ? true : false
}

console.log(allPairs([2, 6, 8, 12]));
console.log(allPairs([1, 2, 3, 4]));
console.log(allPairs([2, 10, 20, 100]));