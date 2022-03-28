import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BoletaVip } from '../models/boletavip';

@Injectable({
  providedIn: 'root'
})
export class BoletaVipService {
  url_api = "http://localhost:3000/api/boletavip"

  constructor(private http:HttpClient) { }

  //Obtener todos de la base de datos
  getBoletasVip(): Observable<any>{
    return this.http.get(this.url_api);
  }
  //Aqui evidenciamos los parametros que necesitamos
  postBoletaVip(boletavip:BoletaVip): Observable<any>{

    return this.http.post(this.url_api, BoletaVip)
  }
  getBoletaVip(id: String): Observable<any>{
    //return this.http.get(this.url_api +id)
    return this.http.get(`${this.url_api}/${id}`)

  }
  putBoletaVip(id: String, boletavip: BoletaVip): Observable<any>{
    return this.http.put(`${this.url_api}/${id}`, boletavip)
  }
  deleteBoletaVip(id: String): Observable<any>{
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
