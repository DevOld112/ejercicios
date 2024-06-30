/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XIV")   // 18
romanoAEntero("CXX")     // 120
 
*/

const numberRomans = [
    {valor: 1000, romano: 'M'},
    {valor: 900, romano: 'CM'},
    {valor: 500, romano: 'D'},
    {valor: 400, romano: 'CD'},
    {valor: 100, romano: 'C'},
    {valor: 90, romano: 'XC'},
    {valor: 50, romano: 'L'},
    {valor: 40, romano: 'XL'},
    {valor: 10, romano: 'X'},
    {valor: 9, romano: 'IX'},
    {valor: 5, romano: 'V'},
    {valor: 4, romano: 'IV'},
    {valor: 1, romano: 'I'}
];



const romanToNumber = (str) => {
    let arr = [...str]

    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < numberRomans.length; j++){
            if(arr[i] === numberRomans[j].romano){
                if(result < numberRomans[j].valor){
                    result = numberRomans[j].valor - result
                } else {
                    result += numberRomans[j].valor

                }
                
            }
        }
    }

    return result
}

console.log(romanToNumber("XIX"))