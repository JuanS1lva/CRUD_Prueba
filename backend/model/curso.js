//modulos internos
const mongoose = require('mongoose')
const esquemaCurso = new mongoose.Schema({
  nombreCurso: String,
  duracion: String,
  fechaInicio: String,
  fechaFin: String,
  sede:String,
  jornada:String,
  descripcion:String
})
//Creamos los exports
const Curso = mongoose.model("curso", esquemaCurso)
module.exports = Curso