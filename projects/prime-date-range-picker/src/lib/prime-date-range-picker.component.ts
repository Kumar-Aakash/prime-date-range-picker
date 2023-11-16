/**
 * @(#)prime-date-range-picker.component.ts Nov 08, 2023
 *
 * @author Aakash Kumar
 */
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ISelectDateOption } from './model/select-date-option';
import { DEFAULT_DATE_OPTIONS } from './data/default-date-options';

@Component({
  selector: 'app-prime-date-range-picker',
  templateUrl: './prime-date-range-picker.component.html',
  styleUrls: ['./prime-date-range-picker.component.scss'],
})
export class PrimeDateRangePickerComponent {
  isDateOptionList: boolean = false;
  isCustomRange: boolean = false;
  @Input() dateFormat: string = 'dd/MM/yyyy';
  @Output() dateListOptions: EventEmitter<ISelectDateOption[]>;

  private _dateDropDownOptions: ISelectDateOption[] = DEFAULT_DATE_OPTIONS;

  constructor(private cdref: ChangeDetectorRef) {
    this.dateListOptions = new EventEmitter<ISelectDateOption[]>();
  }

  @Input()
  set dateDropDownOptions(defaultDateList: ISelectDateOption[]) {
    this._dateDropDownOptions =
      this.getClone<ISelectDateOption[]>(DEFAULT_DATE_OPTIONS).concat(
        defaultDateList
      );
  }

  get dateDropDownOptions(): ISelectDateOption[] {
    return this._dateDropDownOptions.filter((dp) => dp.isVisible) ?? [];
  }
  /**
   * This method clone the data.
   *
   * @param data T
   * @returns T
   */
  private getClone<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
  }

  buttonClicl(){
    console.log('clicked/....')
  }
}
