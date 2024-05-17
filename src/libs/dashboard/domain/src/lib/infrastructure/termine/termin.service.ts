import { Observable } from "rxjs";
import { NewTermin, Termin, TerminIdAndStatusOnly, Termine } from "../../entities/termin/termin";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class TerminService{
    
    constructor(
        private httpClient: HttpClient
    ){}

    getTermineByLehrerId(lehrerId: string, beginn: Date, ende: Date) : Observable<Termine>{
        const url = ["https://localhost:7148", 'termin', 'getTermineByLehrerId', lehrerId].join('/');
        const headers = new HttpHeaders().set('Application', 'application/json');
        const params = new HttpParams()
        .set('beginn', beginn.toISOString())
        .set('ende', ende.toISOString());
        const requestOptions = { headers, params };
        return this.httpClient.get<Termine>(url, requestOptions);
    }

    createTermin(resource: NewTermin){
        const url = ["https://localhost:7148", 'termin', 'createTermin'].join('/');
        const headers = new HttpHeaders().set('Application', 'application/json');
        const body = resource;
        const requestOptions = { headers };
        return this.httpClient.post<Termin>(url, body, requestOptions);
    }

}