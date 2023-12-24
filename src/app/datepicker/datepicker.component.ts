import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent {
  addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    console.log(`${type}: ${event.value}`);
  }

}
