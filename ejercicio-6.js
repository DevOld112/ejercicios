/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/
 

const ageBis = (num) => {

    let years = []

    for(let i = 0; i < 30; i++){
        years[i] = num + i
    }

    
    for(let j = 0; j < years.length; j++){
        if ((years[j] % 4 === 0 && years[j] % 100 !== 0) || years[j] % 400 === 0){
            console.log(years[j])
        }
    }
}


console.log(ageBis(2550))