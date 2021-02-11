import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../app/service/cursos.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  
  constructor(private router: Router, private curso: CursosService) { }
  
  lista:any = []
  listaIni:any = []
  textos:any = ""
  mail:any = false
  ngOnInit(): void {
    this.curso.listarCursos().subscribe(
      (res)=>{
        this.listaIni=res
        this.lista=res;
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  eliminar(cursoElegido:any){
    this.curso.eliminarCurso(cursoElegido).subscribe(
      (res)=>{
        const index = this.lista.indexOf(cursoElegido);
        if(index > -1){
          this.lista.splice(index,1);
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  filtrar(){
    if(!this.textos.length){
      this.lista = this.listaIni
    }
    else{
      this.lista = this.listaIni.filter((list: { nombreCurso: string | any[]; }) => list.nombreCurso.includes(this.textos))
    }
  }

}