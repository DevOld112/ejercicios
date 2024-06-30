/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/

const countWords = (arr) => {
    let arrWords = [...arr]
    let count = 0;
    let result = []

    for(let i = 0; i < arrWords.length; i++){
        result.push(arrWords[i].split(" "))
    }

    return [].concat(...result).length
    
}

console.log(countWords([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
]))