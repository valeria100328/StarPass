import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BoletaGeneral } from '../models/boletaGeneral';

@Injectable({
  providedIn: 'root'
})
export class BoletaGeneralService {
  url_api = "http://localhost:3000/api/boletaGeneral"
  constructor(private http:HttpClient) { }

//Obtener todos de la base de datos
  getBoletaGenerales(): Observable<any>{
    return this.http.get(this.url_api);
  }
  //Aqui evidenciamos los parametros que necesitamos
  postBoletaGeneral(boletageneral:BoletaGeneral): Observable<any>{
   
    return this.http.post(this.url_api, boletageneral)
  }
  getBoletaGeneral(id: String): Observable<any>{
    //return this.http.get(this.url_api +id)
    return this.http.get(`${this.url_api}/${id}`)
  
  }
  putBoletaGeneral(id: String, boletageneral: BoletaGeneral): Observable<any>{
    return this.http.put(`${this.url_api}/${id}`,boletageneral)
  }
  deleteBoletaGeneral(id: String): Observable<any>{
    return this.http.delete(`${this.url_api}/${id}`)
  }
}