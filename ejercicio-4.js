const hanged = (str) => {
  
    //Guardo el parametro en una variable en formato array para desglosarlo y creo la variable resultado y la cantidad de oportunidades
       let previus = [...str];
       let result = [];
       let chance = 5
       let order = 0
    //Creo la Variable donde el usuario va a ir introduciendo los caracteres
      let userInput;
    
    while(chance > 0 && result.join("") !== previus.join("")){
      //Le solicito al usuario que ingrese un caracter valido
      userInput = prompt('Ingresa un caracter valido')
      
      if(userInput === previus[order]){
        result.push(previus[order])
        order++
        alert(`
            Has acertado!
            Palabra: ${result.join('')}
          `)
      } else {
        chance -= 1
        alert(`Te quedan ${chance} intentos`)
      }
     
         
    }
    
    if(chance > 0){
      alert(`Has ganado, la palabra correcta es ${result.join('')}`)
    } else if (chance === 0) {
      alert('Has perdido, por favor vuelve a intentarlo')
    }
      
    return 
    
  }