
const descripcion = {
  demand :true,
  alias : 'd',
  desc : 'Descripción de la tarea por hacer'
}

const completado = {
  default : true,
  alias : 'c'
}



const argv = require('yargs')
  .command('crear', 'crear un iten en la lista de tareas', {
    descripcion : descripcion
  })
  .command('listar', 'listar tareas', {
    completado 
  })
  .command('actualizar', 'actualizar un iten en la lista de tareas', {
    descripcion,
    completado
  })
  .command('borrar', 'elemina un iten en la lista de tareas', {
    descripcion
  })
  .help()
  .argv


module.exports = {
  argv
}