import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Schueler, Schuelers } from "../../entities/schueler/schueler";
import { SchuelerService } from "../../infrastructure/schueler/schueler.service";

@Injectable({
    providedIn: "root"
})

export class SchuelerFacade{

    constructor(
        private schuelerService: SchuelerService
    ){}

    private schuelerByIdSubject = new BehaviorSubject<Schueler | null>(null);
    public schuelerById$ = this.schuelerByIdSubject.asObservable();

    getSchuelerById(id: string): void {
        this.schuelerService.getSchuelerById(id).subscribe({
            next: (data) => {
                this.schuelerByIdSubject.next(data);
            }
        })
    }

    /**************************************************************************/
    
    private schuelerMitNeuemStatusSubject = new BehaviorSubject<Schuelers>({value:[]});
    public schuelerMitNeuemStatus$ = this.schuelerMitNeuemStatusSubject.asObservable();

    private schuelerByLehrerIdSubject = new BehaviorSubject<Schuelers>({value:[]});
    public schuelerByLehrerId$ = this.schuelerByLehrerIdSubject.asObservable();

    getSchuelerByLehrerId(lehrerId: string): void {
        this.schuelerService.getSchuelerByLehrerId(lehrerId).subscribe({
            next: (data) => {
                
                const schuelerMitNeuemStatus: Schuelers = { 
                    value: data.value.filter(schueler => schueler.status === 'Neu')};

                this.schuelerMitNeuemStatusSubject.next(schuelerMitNeuemStatus);
                this.schuelerByLehrerIdSubject.next(data);
            }
        })
    }

    /**************************************************************************/

    private removeSchuelerVonLehrerListSubject = new BehaviorSubject<Schueler | null>(null);
    public removeSchuelerVonLehrerList$ = this.removeSchuelerVonLehrerListSubject.asObservable();

    removeSchuelereVonLehrerList(id: string): void {
        this.schuelerService.removeSchuelerVonLehrerList(id).subscribe({
            next: (data) => {
                this.removeSchuelerVonLehrerListSubject.next(data);
            }
        })
    }

}