/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/


const simplifyRoute = (route) => {

    // Crear variable para almacenar las partes de la ruta
    
    let stack = [];
    
    //Dividir la ruta en sus diferentes partes utilizando
    const parts = route.split('/')
    
    
    
    //Recorrer cada parte
    for(let i = 0; i < parts.length ; i++){
        
        //Si la parte es .. quito el ultimo elemento
        if(parts[i] === '..'){
            stack.pop()
        }
        
        // Si la parte es diferente a ".", o ".. o a una cadena vacia, guardo entonces en stack"
        
        else if(parts[i] !== '.' && parts[i] !== ''){
            stack.push(parts[i])
        }
    }
        return '/'+ stack.join('/')
        
    }
        
        
    
    
    console.log(simplifyRoute('/home//pruebas/'))
    console.log(simplifyRoute('/../'))
    console.log(simplifyRoute('/x/./y/../../z/'))
    console.log(simplifyRoute('/home/'))