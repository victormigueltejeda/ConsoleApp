import { Tarea } from "./tarea.js";



class Tareas {

  constructor(){
    this._listado = {};
  }


  borrarTarea(id = ""){

    if(this._listado[id]){
      delete this._listado[id]
    }
  }

  cargarTareasFromArray(tarea= []) {
    tarea.forEach(tarea => {
      this._listado[tarea.id] = tarea
    })

    console.log(tarea)
  }


  get listadoArr() {

    const listado = [];

    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea)
    })

    return listado;
  }


  crearTarea(desc=""){

    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  listadoCompleto(){

    console.log()
    this.listadoArr.forEach((tarea,i) => {
      const idx = `${i +1}`.green
      const {desc,completadoEn} = tarea;
      const estado = (completadoEn)? "Completado".green: "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);


    })
  }


  listarPendientesCompletadas(completadas = true){

    console.log()

    let contador =0;
    this.listadoArr.forEach((tarea,i) => {


      const {desc,completadoEn} = tarea;
      const estado = (completadoEn)? "Completado".green: "Pendiente".red;


      if(completadas){

        if(completadoEn){
          contador += 1;
          console.log(`${contador.toString().green} ${desc} :: ${estado}`)
        }
      }else{
        if(!completadoEn){
          contador += 1;
          console.log(`${contador.toString().green} ${desc} :: ${estado}`)
        }
      }
    })
  }
}



export {Tareas}