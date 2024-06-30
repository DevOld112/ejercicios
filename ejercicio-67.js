/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 67:
Dada una frase devuelve la longitud de la última palabra que tenga más de 4
caracteres y que contenga la vocal A.
 
Ejemplos:
longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')
 
*/

const longWord = (str) => {
    //Valido que el argumento sea un string y no otro tipo de dato
    
    if(typeof str !== 'string'){
      return 'Argumento invalido, solo String'
    }
    
    // Separo la cadena de string en un array y creo la variable long que almacena la palabra mas larga
    
    let arr = str.split(" ")
    let long = 0
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i].toLowerCase().includes('a') || arr[i].toLowerCase().includes('á')){
        if(arr[i].length > long){
          long = arr[i].length
        }
      }
    }
    return long
    
  }
  
  console.log(longWord('El cielo está encapotado quien lo desencapotará hoy'))