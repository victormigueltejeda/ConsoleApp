import { inquireMenu,pausa ,leerInput} from "./helpers/inquirer.js"
import { Tareas } from './models/tareas.js';
import  {guardarDB,leerDB}  from "./helpers/guardarArchivo.js";

const main = async() => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();


  if(tareasDB) {
    //List the Task
  }


  do{
   opt = await inquireMenu();

   switch(opt){
    case "1":
     // Create Option
     const desc = await leerInput("Descripcion: ")
     tareas.crearTarea(desc)
    break;

    case "2":
      //List Option
      console.log(tareas.listadoArr)
    break;
   }

   //guardarDB(tareas.listadoArr)
   await pausa()

  }while(opt !== "0")

}



main()