import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = "http://127.0.0.1/tutorias/admin/";

  constructor(private http: HttpClient) { }

  countActividades(){
    return this.http.get(`${this.URL}actividades/count.php`);
  }
  
  buscarEstudiante(matricula: any){
    return this.http.get(`${this.URL}estudiantes/buscar.php?matricula=${matricula}`);
  }
  
  buscarActividadEstudiante(actividad: number, matricula: any){
    return this.http.get(`${this.URL}estudiantes/buscarActividad.php?idActividad=${actividad}&matricula=${matricula}`);
  }
  
  getActividades(id: number){
    return this.http.get(`${this.URL}actividades/getAllId.php?idTipoActividad=${id}`);
  }

  getEstudiantes(id: number){
    return this.http.get(`${this.URL}estudiantes/getAllId.php?idActividad=${id}`)
  }

}
