import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }
  private urlGeneral = 'http://localhost:3000/api/curso/'

  listarCursos() {
    return this.http.get<any>(this.urlGeneral+"lista/");
  }

  crearCurso(curso:any) {
    return this.http.post<any>(this.urlGeneral, curso);
  }

  editarCurso(curso:any) {
    return this.http.put<any>(this.urlGeneral, curso);
  }
  eliminarCurso(curso:any) {
    const _id = curso._id
    const url = `${this.urlGeneral}${_id}`
    return this.http.delete<any>(url);
  }
}
