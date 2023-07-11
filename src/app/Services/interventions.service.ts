import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterventionsService {
  apiurl_interventions='https://localhost:44308/Interventions'
  apiurl='https://localhost:44308/Interventions'
  constructor(private http:HttpClient) {

  }
  ChargerIntervention(){
    return this.http.get(this.apiurl_interventions);
  }

  ChargerTout():Observable<object>{
    return this.http.get(this.apiurl);
  }
  ChargerInterventionParCode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }
  SupprimerInterventionParcode(code:any){
    return this.http.delete(this.apiurl+'/'+code);
  }
  Enregistrer(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
}
