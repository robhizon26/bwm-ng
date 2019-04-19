import { Booking } from "./../../booking/shared/booking.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
@Injectable()
export class BookingService {
  constructor(private http: HttpClient) {}
  public createBooking(booking: Booking): Observable<any> {
    return this.http.post("/api/v1/bookings", booking);
  }
}
