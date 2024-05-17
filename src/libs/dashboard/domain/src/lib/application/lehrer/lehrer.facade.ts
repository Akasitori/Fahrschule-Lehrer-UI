import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AktualisierterLehrer, Lehrer } from "../../entities/lehrer/lehrer";
import { LehrerService } from "../../infrastructure/lehrer/lehrer.service";

@Injectable({
    providedIn: "root"
})

export class LehrerFacade{

    constructor(
        private lehrerService: LehrerService
    ){}

    private lehrerByIdSubject = new BehaviorSubject<Lehrer | null>(null);
    public lehrerById$ = this.lehrerByIdSubject.asObservable();

    getLehrerById(id: string): void {
        this.lehrerService.getLehrerById(id).subscribe({
            next: (data) => {
                this.lehrerByIdSubject.next(data);
            }
        });
    }

    /**************************************************************************/

    private updateLehrerSubject = new BehaviorSubject<AktualisierterLehrer | null>(null);
    public updateLehrer$ = this.updateLehrerSubject.asObservable();

    updateLehrer(resource: AktualisierterLehrer): void {
        this.lehrerService.updateLehrer(resource).subscribe({
            next: (data) => {
                this.updateLehrerSubject.next(data);
            }
        })
    }

    
}