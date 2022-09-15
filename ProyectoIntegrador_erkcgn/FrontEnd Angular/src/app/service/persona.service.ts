import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  URL = environment.URL +'persona/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.URL}traer/perfil`);    
  }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.URL}mostrar`);
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.URL}detail/${id}`);
  }

  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(`${this.URL}create`, persona);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(`${this.URL}update/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.URL}delete/${id}`);
  }

  
}
