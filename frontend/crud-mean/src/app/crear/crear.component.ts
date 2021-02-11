import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../app/service/cursos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private router: Router, private curso: CursosService) { }

  ngOnInit(): void {
  }
  nuevoCurso = {
    nombreCurso: '',
    duracion: '',
    fechaInicio: '',
    fechaFin:'',
    sede:'',
    jornada:'',
    descripcion:''
  };
  registrar() {
    this.curso.crearCurso(this.nuevoCurso).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/lista']); // ir al listar de curso
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
