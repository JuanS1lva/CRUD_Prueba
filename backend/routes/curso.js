//modulos de node
const express = require("express")
const router = express.Router()
//
const Curso = require("../model/curso")
const { Mongoose } = require("mongoose")

router.get('/lista',async(req,res)=>{
  const curso = await Curso.find()
  res.send(curso)
})

router.put('/',async(req,res)=>{
  const curso = await Curso.findByIdAndUpdate(
    req.body._id,
    {
      nombreCurso: req.body.nombreCurso,
      duracion: req.body.duracion,
      fechaInicio: req.body.fechaInicio,
      fechaFin: req.body.fechaFin,
      sede: req.body.sede,
      jornada: req.body.jornada,
      descripcion: req.body.descripcion
    },
    {
      new: true
    }
  )
  if(!curso){
    return  res.status(401).send("no hay curso asignada")
  }
  res.status(200).send(curso)
})

router.delete("/:_id", async (req, res) => {
  // Buscamos el usuario
  const curso = await Curso.findById(req.params._id);
  // Si no existe el usuario
  if (!curso) return res.status(401).send("No existe curso en bd");
  // Eliminamos actividad asignada al usuario
  const cursoSelect = await Curso.findByIdAndDelete(req.params._id);
  // si no existe la actividad
  if (!cursoSelect) return res.status(401).send("No hay curso con ese ID");
  // Si se encuentra la actividad
  res.status(200).send({ message: "Curso eliminada" });
});

router.post('/' ,async(req,res)=>{
  const curso = new Curso({
    nombreCurso: req.body.nombreCurso,
    duracion: req.body.duracion,
    fechaInicio: req.body.fechaInicio,
    fechaFin: req.body.fechaFin,
    sede: req.body.sede,
    jornada: req.body.jornada,
    descripcion: req.body.descripcion
  })
  const result = await curso.save()
  res.status(200).send(result)
})

module.exports = router