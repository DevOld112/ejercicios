/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 69:
Crea una función que dado un texto, sea capaz de censurar palabras.
 
Ejemplos:
censurar("Texto de prueba", "texto") // *** de prueba
 
*/
 
const banWord = (text, ban) => {
    //Valido que los argumentos ingresados sean validos
    
    if(typeof text !== 'string' && typeof ban !== 'string'){
      return 'Argumentos invalidos'
    }
    
    //Separo mi primer argumento en un arreglo que voy a recorrer en un ciclo for para validar con ban
    
    let arrText = text.split(" ")
    
    for(let i = 0; i < arrText.length; i++){
      if(arrText[i].toLowerCase() === ban){
       arrText[i] = '*'.repeat(ban.length)
      }
        
    }
    
    return arrText.join(" ")
    
  }
  
  console.log(banWord('Hola a todos', 'hola'))