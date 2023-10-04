import { inquireMenu,pausa ,leerInput,listadoTareasBorrar,confirmar,mostrarListadoCheckList} from "./helpers/inquirer.js"
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

    case "5":
      //completado pendiente
     const ids = await mostrarListadoCheckList(tareas.listadoArr)
     tareas.toggleCompletadas(ids)
     console.log(ids)
    break;


    case "6":
      //Task Delete
      const id = await listadoTareasBorrar(tareas.listadoArr)

      if(id !== "0"){
        const ok = await confirmar("Esta Seguro?");

        if(ok){
          tareas.borrarTarea(id)
          console.log("Tarea Borrada")
        }
        
      }
    break;
   }

  guardarDB(tareas.listadoArr)
  await pausa()

  }while(opt !== "0")

}



main()