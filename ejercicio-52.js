/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 52:
Dado un array de arrays, unir todos los arrays en uno solo
sin usar la función flat o concat de javascript
solo con estructuras de control y funciones basicas de arrays
 
Ejemplos:
const numeros = [  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
 
limpiarNumeros(numeros);
 
Devuelve: 
[1, 2, 3, 4, 5, 6, 7, 8, 9]
 
*/

const test = [[5, 5, 5]]

const numeros = [  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const cleanArrays = (num) => {
  
  //Valido si el argumento ingresado es un array valido
  
  if(Array.isArray(num)){
    for(let h = 0; h < num.length; h++){
      if(!Array.isArray(num[h])){
        return console.log('Argumento invalido')
      }
    }
  }
  
  // Creo una array vacio donde va a estar mi resultado final esperado
  
  let result = []
  
  // Creo un ciclo for para mi array global
  
  for(let i = 0; i < num.length; i++){
    
   //Creo un ciclo for para cada array de mi array general
    
    for(let j = 0; j < num[i].length; j++){
      result.push(num[i][j])
    }
  }
  
  return result
  
}

console.log(cleanArrays(test));