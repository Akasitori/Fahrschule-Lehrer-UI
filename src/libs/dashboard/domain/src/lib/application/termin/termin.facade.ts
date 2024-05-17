import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NewTermin, Termin, Termine } from "../../entities/termin/termin";
import { TerminService } from "../../infrastructure/termine/termin.service";

@Injectable({
    providedIn: 'root'
})
export class TerminFacade
{
    private todayStartDate = new Date(); 
    private todayEndDate = new Date();

    constructor(private terminService: TerminService){}

    private terminByLehrerIdSubject = new BehaviorSubject<Termine>({value:[]});
    public terminByLehrerId$ = this.terminByLehrerIdSubject.asObservable();

    getTermineByLehrerId(lehrerId: string, beginn: Date, ende: Date){
        this.terminService.getTermineByLehrerId(lehrerId, beginn, ende).subscribe({
            next: data => {
                this.terminByLehrerIdSubject.next(data);
            }
        });
    }

    /**************************************************/

    private termineForTodayByLehrerIdSubject = new BehaviorSubject<Termine>({value:[]});
    public termineForTodayByLehrerId$ = this.termineForTodayByLehrerIdSubject.asObservable();

    getTermineForTodayByLehrerId(lehrerId: string){
        this.todayStartDate.setHours(0,0,0,0);
        this.todayEndDate.setHours(23,59,59,999);
        this.terminService.getTermineByLehrerId(lehrerId, this.todayStartDate, this.todayEndDate).subscribe({
            next: data => {
                this.termineForTodayByLehrerIdSubject.next(data);
            }
        });
    }

    /***************************************************/

    private terminCreatedSubject = new BehaviorSubject<Termin | null>(null);
    public terminCreated$ = this.terminCreatedSubject.asObservable();

    createTermin(neuerTermin: NewTermin){
        this.terminService.createTermin(neuerTermin).subscribe({
            next: data => {
               this.terminCreatedSubject.next(data);
            }
        });
    }
}