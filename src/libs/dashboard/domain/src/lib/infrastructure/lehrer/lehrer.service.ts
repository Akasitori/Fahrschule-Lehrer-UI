import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AktualisierterLehrer, Lehrer } from "../../entities/lehrer/lehrer";

@Injectable({
    providedIn: 'root'
})

export class LehrerService{

    constructor(
        private httpClient: HttpClient
    ){}

    getLehrerById(id: string): Observable<Lehrer>{
        const url = ["https://localhost:7148", 'lehrer', 'getLehrerById', id].join('/');
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.get<Lehrer>(url,requestOptions);
    }

    updateLehrer(resource: AktualisierterLehrer){
        const url = ["https://localhost:7148", 'lehrer', 'updateLehrer'].join('/');
        const body = resource;
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.put<AktualisierterLehrer>(url, body, requestOptions);
    }
}

