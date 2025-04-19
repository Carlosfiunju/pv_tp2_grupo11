let nombres = ["lucas" , "santiago" , "thiago" , "fabri" , "mateo", "santino" ]
   let nombrelargo=nombres[0];
   for (let i = 1 ; i < nombres.length ; i++){
    if(nombres[i].length > nombrelargo.length){
     nombrelargo = nombres[i]    
    }
   }
   console.log("el nombre mas largo es: " + nombrelargo)