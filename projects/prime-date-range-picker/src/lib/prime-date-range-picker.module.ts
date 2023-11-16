/**
 * @(#)prime-date-range-picker.module.ts Nov 08, 2023
 *
 * @author Aakash Kumar
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarComponent } from './calendar/calendar.component';
import { StopClickPropagationDirective } from './directive/stop-click-propagation.directive';
import { PrimeDateRangePickerComponent } from './prime-date-range-picker.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayPanelModule,
    ButtonModule,
    InputTextModule,
    ListboxModule,
    CalendarModule,
    FormsModule,
  ],
  declarations: [
    PrimeDateRangePickerComponent,
    CalendarComponent,
    StopClickPropagationDirective,
  ],
  exports: [PrimeDateRangePickerComponent],
})
export class PrimeDateRangePickerModule {}
