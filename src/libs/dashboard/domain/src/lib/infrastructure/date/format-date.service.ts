import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class FormatDateAndTimeService{
    
    constructor(
        
    ){}


    convertDateToTimeString(dateToConvert: Date) : string | null{
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(dateToConvert, 'HH:mm');
    }

    insertTimeIntoDate(date: Date, time: string): Date {
        // Split the time into hours and minutes
        const [hours, minutes] = time.split(':').map(Number);
    
        // Create a new date with the same year, month, and day as the original date
        const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
    
        return newDate;
    }

    buildDateFromNumericalStrings(yearMonthDay: string, time: string) : Date{
        const [year, month, day] = yearMonthDay.split('-').map(Number);
        const [hours, minutes] = time.split(':').map(Number);

        console.log("yes");
        console.log(yearMonthDay);
        console.log("year",year);
        console.log("month",month);
        console.log("day",day);
        console.log("hours",hours);
        console.log("min",minutes);

        // for some reason, months are zero indexed
        const newDate = new Date(year, month-1, day, hours, minutes);
        console.log("newdate ", newDate);
        return newDate;
    }

    isChronological(beginn: string, ende: string){
        const [beginnHours, beginnMinutes] = beginn.split(':').map(Number);
        const [endeHours, endeMinutes] = ende.split(':').map(Number);
        
        if(beginnHours < endeHours){
            return true;
        }else{
            if(beginnMinutes < endeMinutes){
                return true;
            }
        }
        return false;
    }

}