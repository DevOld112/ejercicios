/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 31:
Dado un texto, crea una función que sea capaz de invertir
el orden de sus palabras.
 
No podemos usar funciones nativas del lenguaje.
 
Ejemplos:
invertirPalabras("Hola soy Victor Robles"); // Devuelve: Robles Victor soy Hola
*/

const inverseWords = (str) => {
    //Separo el string en un array
    let phrase = str.split(" ")


    //Declaro la longitud del array en una variable
    const num = phrase.length

    //Declaro el nuevo Array que devolvere al final del ejercicio

    let phraseInverse = []

    //Inicializo un ciclo for que recorra el arreglo original e introduza en el inverso desde el ultimo elemento hasta el primero

    for(let count = num - 1; count >= 0 ; count--){
        if(phrase[count].length >= 1){
            phraseInverse += phrase[count] + " "
        } 
        
    }

    return phraseInverse


}

console.log(inverseWords("Hola soy Wilmer      Lopez"))