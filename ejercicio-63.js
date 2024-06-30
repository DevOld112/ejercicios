/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 63:
Crea una función para conseguir las sumas acumuladas de una array de numeros
 
Ejemplos:
sumasAcumuladas([1, 2, 3, 4])   // [1, 3, 6, 10] 
 
(se calcula como: [1, 1+2, 1+2+3, 1+2+3+4])
*/
 

const addAcumulate = (arrNumber) => {
    //Validar que sea un argumento valido, es decir sea un array
    
    if(!Array.isArray(arrNumber)){
      return 'No es un argumento valido'
    }
    
    //Validar que los valores del array sean validos, es decir que sea numberos
    
    if(Array.isArray(arrNumber)){
      for(let i = 0; i < arrNumber.length; i++){
        if(typeof arrNumber[i] !== 'number'){
          return 'El arreglo tiene un valor invalido, introducir otro argumento'
        }
      }
    }
    
    //Creo una variable donde se va a almacenar el resultado y otra variable donde se van a almacenar los valores de result
    let result = []
    let sum = 0
    
    for(let j = 0; j < arrNumber.length; j++){
      sum += arrNumber[j]
      result.push(sum)
    }
    
    return result
  }
  
  console.log(addAcumulate([5, 5, 5, 5]))