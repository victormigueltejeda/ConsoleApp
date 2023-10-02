const mostrarMenu = () => {

  return new Promise(resolve => {
    const readline = require("readline").createInterface({
      input:process.stdin,
      output:process.stdout
    })
  
    readline.question(`Seleccione una opcion:`,(opt) => {
      readline.close();
      resolve(opt)
    });  
    
  })
}



const pausa = () => {


  return new Promise(resolve => {
    const readline = require("readline").createInterface({
      input:process.stdin,
      output:process.stdout
    })
  
    readline.question(`\n Presione ${'ENTER'.green} para continuar`,(opt) => {
      readline.close();
      resolve()
    });

  })
}

export{
  mostrarMenu,
  pausa
}