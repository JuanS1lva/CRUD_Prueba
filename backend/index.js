const cors = require("cors")
const express = require("express")
const mongoose = require ("mongoose")
// modulos creados
const curso = require("./routes/curso")
//app
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/curso/",curso)

const port = process.env.PORT || 3000
app.listen(port,()=>{console.log("ejecutando en puerto: ", port);})
//registro en Mongo
mongoose.connect("mongodb://localhost/crud",{
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("conexion con mongo: on");
})
.catch((error)=>{
  console.log("conexion con mongo: off");
})