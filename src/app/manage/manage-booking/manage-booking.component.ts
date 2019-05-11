import { Booking } from "./../../booking/shared/booking.model";
import { Component, OnInit } from "@angular/core";
import { BookingService } from "../../booking/shared/booking.service";
import { HelperService } from "../../common/service/helper.service";

@Component({
  selector: "bwm-manage-booking",
  templateUrl: "./manage-booking.component.html",
  styleUrls: ["./manage-booking.component.scss"]
})
export class ManageBookingComponent implements OnInit {
  bookings: Booking[];
  constructor(
    private bookingService: BookingService,
    private helper: HelperService
  ) {}

  ngOnInit() {
    this.bookingService.getUserBookings().subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
      },
      () => {}
    );
  }
}
