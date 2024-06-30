/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

const superHeroes = {

        'Iron Man': {
            realName: 'Tony Stark',
            superPower: 'Tecnologia avanzada',
            team: 'Avengers'
        },

        'Capitan America': 
        {
            realName: 'Steve Rogers',
            superPower: 'Fuerza, Agilidad, liderazgo',
            team: 'Avengers'
        }
        
    ,
    
        'Wolverine':{
            realName: 'Logan',
            superPower: 'Huesos de Adamantium, garras de adamantium',
            team: 'X-men'
        }
        
}

const showInformation = (str) => {

        if(str in superHeroes){
            const info = superHeroes[str]
    
            console.log(
                `
                Nombre Real: ${info.realName}
                Poderes: ${info.superPower},
                Equipo: ${info.team}
                ---------------------------------
                `
            )
        }else{
    
            console.log('Ese superheroe no existe')
        }
    

    

}

console.log(showInformation(['Iron Man']))

const showInformations = (arr) => {
    arr.forEach(name => {
        showInformation(name)
    })
}

showInformations(['Iron Man', 'Capitan America', 'Jajaja'])