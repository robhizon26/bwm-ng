import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Booking } from "../booking/shared/booking.model";
@Injectable()
export class ManageService {
  constructor(private http: HttpClient) {}
  public manageBooking(booking: Booking): Observable<any> {
    return this.http.post("/api/v1/bookings/manage", booking);
  }
}
