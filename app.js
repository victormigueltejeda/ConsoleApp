import { inquireMenu,pausa ,leerInput,listadoTareasBorrar} from "./helpers/inquirer.js"
import { Tareas } from './models/tareas.js';
import  {guardarDB,leerDB}  from "./helpers/guardarArchivo.js";

const main = async() => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();


  if(tareasDB) {
    //List the Task
    tareas.cargarTareasFromArray(tareasDB)
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
      tareas.listadoCompleto()
    break;

    case "3":
      //List complet
      tareas.listarPendientesCompletadas()
    break;

    case "4":
      //List pendint
      tareas.listarPendientesCompletadas(false)
    break;

    case "6":
      //Task Delete
      const id = await listadoTareasBorrar(tareas.listadoArr)
      console.log({id})
    break;
   }

   guardarDB(tareas.listadoArr)
   await pausa()

  }while(opt !== "0")

}



main()