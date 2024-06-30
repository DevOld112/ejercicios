/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 51:
Crea una función que dibuje un diamante de asteriscos.
 
Ejemplos:
generarDiamante(5);
 
Devuelve: 
  *
 *** 
*****
 *** 
  *  
 
*/

const generateDiamond = (num) => {

    // Comprobar que el tamaño sea impar

    if(num % 2 === 0){
        num--
    }

    //Calcular la mitad del diamante
    
    const middle = Math.floor(num / 2)

    //Recorrer Filas del diamante

    for(let i = 0; i < num; i++){
        let row = "";

        //Calculo el numero de espacios

        const space = Math.abs(middle - i);

       // Imprimir espacios

        for(let spaceAct = 0 ; spaceAct < space; spaceAct++){
            row += " ";
        }

        //Imprimir astericos

        for(let astericosActual = 0; astericosActual < num - (space*2); astericosActual++){
            row += "*"
        }

        // Mostrar fila

        console.log(row)
        
    }



}

generateDiamond(20)