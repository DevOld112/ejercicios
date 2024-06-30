/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]
 
*/
 
const countPairNumber = (arr, num) => {
    if(!Array.isArray(arr) || arr.length < 2){
        return false
    }

    //Creo Array de parejas donde se va a guardar la suma de num

    let pair = []

    //Recorro el array de numeros
    for(const element of arr) {

        //recorrer de nuevo apartir del elemento que recorro ahora

        for (const otherElement of arr.slice(arr.indexOf(element) + 1)){
            if(element + otherElement === num){
                pair.push([element, otherElement])
            }
        }
    }

    //retorno pair

    return pair
    
}

console.log(countPairNumber([1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10 ,11 ,12], 18))