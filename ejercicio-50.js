const convertTemp = (str) => {
  
    let result = ''
    let num = [...str]
    let arr = []
    
    if(str.includes('C')){
      
      for(let i = 0; i < str.length; i++){
        arr.push(num[i])
      }
      
      result = parseInt(arr.join("")) * 9/5 + 32
      
     
      
      return result.toString() + "°F"
    }
    
    
    if (str.includes('F')){
      for(let i = 0; i < str.length; i++){
        arr.push(num[i])
      }
      
      result = (parseInt(arr.join("")) - 32 ) * 5/9
      
     
      
      return result.toString() + "°C"
    }
    
  }
  
  console.log(convertTemp('120°C'))