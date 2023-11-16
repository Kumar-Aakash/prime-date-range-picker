import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements AfterViewInit {
  rangeDates: Date[] | undefined;
  @ViewChild('firstCalendarView') firstCalendarView!: Calendar;
  @ViewChild('secondCalendarView') secondCalendarView!: Calendar;
  constructor(
    private cdref: ChangeDetectorRef,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.addFirstCalendarButtonEvents();
  }

  monthChanged(event: any) {
    console.log(event);
  }

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  public onMousedown(event: any): void {
    event.stopPropagation();
  }

  /**
   * This method attaches next and prev events on buttons.
   *
   */
  private addFirstCalendarButtonEvents(): void {
    const monthPrevBtn = this.el.nativeElement.querySelectorAll(
      '#firstCalendarView .p-datepicker-next'
    );
    const monthNextBtn = this.el.nativeElement.querySelectorAll(
      '#firstCalendarView .p-datepicker-prev'
    );
    console.log(monthPrevBtn.length);
    this.attachClickEvent(monthPrevBtn, this.handleFirstCalDatePrevEvent);
    this.attachClickEvent(monthNextBtn, this.handleFirstCalendarNextEvent);
  }

  /**
   * This method handles First calendar prev button event.
   * @param classRef CalendarComponent
   */
  private handleFirstCalDatePrevEvent(classRef: CalendarComponent): void {
    console.log(1);
    const leftDateCalender = classRef.firstCalendarView;
    // if (leftDateCalender.currentView.toLocaleLowerCase() === 'month') {
    //   const date: Date = new Date(leftDateCalender['_clampedActiveDate']);
    //   classRef.secondCalendarView.minDate =
    //     classRef.getFirstDateOfNextMonth(date);
    //   classRef.cdref.markForCheck();
    // }
    // classRef.attachHoverEventOnFirstViewDates();
  }

  /**
   * This method handle the next button event.
   *
   * @param classRef CalendarComponent
   * @param isForced boolean
   */
  private handleFirstCalendarNextEvent(
    classRef: CalendarComponent,
    isForced = false
  ): void {
    console.log(2);
    // const firstCalendar = classRef.firstCalendarView;
    // if (firstCalendar.currentView.toLocaleLowerCase() === 'month' || isForced) {
    //   const date: Date = new Date(firstCalendar['_clampedActiveDate']);
    //   const nextMonthDate = classRef.getFirstDateOfNextMonth(date);
    //   classRef.secondCalendarView.minDate = nextMonthDate;
    //   classRef.secondCalendarView._goToDateInView(nextMonthDate, 'month');
    //   classRef.removeDefaultFocus(classRef);
    //   classRef.cdref.markForCheck();
    // }
    // setTimeout(() => {
    //   classRef.attachHoverEventOnFirstViewDates();
    //   classRef.attachHoverEventOnSecondViewDates();
    // }, 300);
  }

  /**
   * This method attach the next and prev events on specified nodes.
   *
   * @param nodes any
   * @param handler Function
   */
  private attachClickEvent(nodes: any, handler: Function): void {
    if (!nodes) {
      return;
    }
    Array.from(nodes).forEach((button) => {
      this.renderer.listen(button, 'click', (event) => {
        event.preventDefault();
        handler(this);
      });
    });
  }

  /**
   * This method attaches next and prev events on buttons.
   *
   */
  private addSecondCalendarButtonEvents(): void {
    const monthPrevBtn: any[] = this.el.nativeElement.querySelectorAll(
      '#secondCalendarView .mat-calendar-previous-button'
    );
    const monthNextBtn: any[] = this.el.nativeElement.querySelectorAll(
      '#secondCalendarView .mat-calendar-next-button'
    );
    if (!monthPrevBtn || !monthNextBtn) {
      return;
    }
    this.attachSecondViewClickEvent(monthPrevBtn);
    this.attachSecondViewClickEvent(monthNextBtn);
  }

  /**
   * This method attach click event of next and prev button on second view.
   *
   */
  private attachSecondViewClickEvent(nodes: any): void {
    Array.from(nodes).forEach((button) => {
      this.renderer.listen(button, 'click', () => {
        // this.attachHoverEventOnSecondViewDates();
      });
    });
  }
}
