import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Schueler, Schuelers } from "../../entities/schueler/schueler";

@Injectable({
    providedIn: 'root'
})

export class SchuelerService{
    constructor(private httpClient: HttpClient){}
    
    getSchuelerById(id: string): Observable<Schueler>{
        const url = ["https://localhost:7148", 'schueler', 'getSchuelerById', id].join('/');
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.get<Schueler>(url,requestOptions);
    }

    getSchuelerByLehrerId(lehrerId: string): Observable<Schuelers>{
        const url = ["https://localhost:7148", 'schueler', 'getAllSchuelerByLehrerId', lehrerId].join('/');
        const headers = new HttpHeaders().set('Application', 'application/json');
        const requestOptions = { headers };
        return this.httpClient.get<Schuelers>(url, requestOptions);
    }

    removeSchuelerVonLehrerList(id: string): Observable<Schueler>{
        const url = ["https://localhost:7148", 'schueler', 'removeSchuelerVonLehrerList', id].join('/');
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.patch<Schueler>(url,requestOptions);
    }
}