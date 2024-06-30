/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 57:
Crea una función que convierta cualquier frase a una SEO slug.
 
Una seo slug es un fragmento de url optimizado para posicionamiento web:
cursos-de-victor-robles-web
 
Ejemplos:
transformarURL("Cursos de Victor Robles WEB");
 
Devuelve:
cursos-de-victor-robles-web
 
*/


const transformURL = (str) => {
    
    //Separo mi argumento en un array y creo una variable que mostrara el resultado final esperado
        
        let arr = [...str.toLowerCase()]
        let result = ''
        
    //Recorro el arreglo que he creado
        
        for(let i = 0; i < str.length; i++){
        
     // Si valor es un espacio vacio entonces sustituyo por '-' y sino reemplazo por por la letra
        if(arr[i] === ' '){
            result += '-'
        } else {
            result += arr[i]
        }
        
        }
        
        return result;
    }
    
    console.log(transformURL("Hola a todos mi nombre es Wilmer Lopez jajajaja"))