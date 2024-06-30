/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/

const resultArea = (obj) => {


    let area = 0

    if(obj.tipo === 'triangulo'){
        return area = (obj.base * obj.altura) / 2
    }

    if(obj.tipo === 'cuadrado'){
        return area = (obj.base * obj.altura)
    }

    if(obj.tipo === 'circulo'){
        return area = Math.PI * (obj.radio ** 4)
    }

    return console.log('No es una figura geometrica valida')
}

console.log(resultArea({ tipo: 'cuadrado', base: 6, altura: 9 }))