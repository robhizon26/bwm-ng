import { BookingService } from "./../../../booking/shared/booking.service";
import { HelperService } from "./../../../common/service/helper.service";
import { Booking } from "./../../../booking/shared/booking.model";
import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";
import { Rental } from "../../shared/rental.model";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { DaterangePickerComponent } from "ng2-daterangepicker";
import { AuthService } from "../../../auth/shared/auth.service";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "bwm-rental-detail-booking",
  templateUrl: "./rental-detail-booking.component.html",
  styleUrls: ["./rental-detail-booking.component.scss"]
})
export class RentalDetailBookingComponent implements OnInit {
  @Input() rental: Rental;
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  newBooking: Booking;
  modalRef: any;
  daterange: any = {};
  bookOutDates: any[] = []; // see original project for full list of options
  errors: any[] = [];

  // can also be setup using the config service to apply to multiple pickers
  options: any = {
    locale: { format: Booking.DATE_FORMAT },
    alwaysShowCalendars: false,
    opens: "left",
    autoUpdateInput: false,
    isInvalidDate: this.checkForInvalidDates.bind(this)
  };
  constructor(
    public auth: AuthService,
    private helper: HelperService,
    private modalService: NgbModal,
    private bookingService: BookingService,
    private toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.newBooking = new Booking();
    this.getBookedOutDates();
  }

  private checkForInvalidDates(date) {
    return (
      this.bookOutDates.includes(this.helper.formatBookingDate(date)) ||
      date.diff(moment(), "days") < 0
    );
  }

  private getBookedOutDates() {
    if (this.rental.bookings && this.rental.bookings.length > 0) {
      this.rental.bookings.forEach((booking: Booking) => {
        const dateRange = this.helper.getBookingRangeOfDates(
          booking.startAt,
          booking.endAt
        );
        this.bookOutDates.push(...dateRange);
      });
      console.log(" this.bookOutDates ", this.bookOutDates);
    }
  }

  private addNewBookedOutdates(bookingData: any) {
    const dateRange = this.helper.getBookingRangeOfDates(
      bookingData.startAt,
      bookingData.endAt
    );
    this.bookOutDates.push(...dateRange);
  }

  private resetDatePicker() {
    this.picker.datePicker.setStartDate(moment());
    this.picker.datePicker.setEndDate(moment());
    this.picker.datePicker.element.val("");
  }

  openConfirmModal(content) {
    this.errors = [];
    this.modalRef = this.modalService.open(content);

    // .result.then(
    //   result => {
    //     this.closeResult = `Closed with: ${result}`;
    //   },
    //   reason => {
    //     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   }
    // );
  }

  createBooking() {
    this.newBooking.rental = this.rental;
    this.bookingService.createBooking(this.newBooking).subscribe(
      bookingData => {
        this.addNewBookedOutdates(bookingData);
        this.newBooking = new Booking();
        this.modalRef.close();
        this.resetDatePicker();
        this.toastr.success(
          "Booking has been successfully created, check your booking detail in manage section",
          "Success!"
        );
      },
      errorResponse => {
        this.errors = errorResponse.error.errors;
      }
    );
  }

  selectedDate(value: any, datepicker?: any) {
    this.options.autoUpdateInput = true;
    this.newBooking.startAt = this.helper.formatBookingDate(value.start);
    this.newBooking.endAt = this.helper.formatBookingDate(value.end);
    this.newBooking.days = -value.start.diff(value.end, "days");
    this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return "by pressing ESC";
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return "by clicking on a backdrop";
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
