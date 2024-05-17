import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-date-range',
  templateUrl: './select-date-range.component.html',
  styleUrls: ['./select-date-range.component.css']
})
export class SelectDateRangeComponent {

  startDate: Date | null = null;
  endDate: Date | null = null;

  @Output() dateRangeSelected = new EventEmitter<{ startDate: Date | null, endDate: Date | null }>();

  selectDateRange(type: 'start' | 'end', event: any) {
    if (event.value && type === 'start') {
      this.startDate = event.value;
    } else if (event.value && type === 'end') {
      this.endDate = event.value;
    }

    // Do something with the start and end dates
    if (this.startDate && this.endDate) {
      this.emitDateRange();
    }
  }

  emitDateRange() {
    this.endDate?.setHours(23,59,59,999);
    this.dateRangeSelected.emit({ startDate: this.startDate, endDate: this.endDate });
    this.endDate = null;
  }
}
