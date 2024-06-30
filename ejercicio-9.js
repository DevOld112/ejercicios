/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/


const addPair = (arrNumber) => {
    
    //Creamos las variables donde se van a sumar los numeros pares

    let result = 0;

    //Inicializamos un ciclo for y que sume en result si arrNumber[i] % 2 === 0

    for(let i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] % 2 === 0){
            result += arrNumber[i]
        }
    }

    return result; 
} 

console.log(addPair([2, 4, 6, 5, 9, 10]))