/**
 * @(#)prime-date-range-picker.module.ts Nov 08, 2023
 *
 * @author Aakash Kumar
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeDateRangePickerComponent } from './prime-date-range-picker.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

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
  declarations: [PrimeDateRangePickerComponent],
  exports: [PrimeDateRangePickerComponent],
})
export class PrimeDateRangePickerModule {}
