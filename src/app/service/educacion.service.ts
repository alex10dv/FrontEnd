import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
   URL = 'http://localhost:8080/educacion/';
  constructor(private httpClient :HttpClient) { }
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista'); // trae la lista de toda la educacion
  }

  public detail(id:number):Observable<Educacion>{
   return this.httpClient.get<Educacion>(this.URL + `detail/${id}`); // las comillas a la izquierda porque se manda por parametro un id
  }

  public save(educacion: Educacion):Observable<any>{

    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id:number, educacion:Educacion):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
