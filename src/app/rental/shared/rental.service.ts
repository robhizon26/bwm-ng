import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Rental } from "./rental.model";
@Injectable()
export class RentalService {
  /**
   *
   */
  constructor(private http: HttpClient) {}
  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get("/api/v1/rentals/" + rentalId);

    // return new Observable(observer => {
    //   setTimeout(() => {
    //     const foundRental = this.rentals.find(rental => {
    //       return rental.id == rentalId;
    //     });
    //     observer.next(foundRental);
    //   }, 500);
    // });
  }

  public getRentals(): Observable<any> {
    return this.http.get("/api/v1/rentals");
    // return new Observable<Rental[]>(observer => {
    //   setTimeout(() => {
    //     observer.next(this.rentals);
    //   }, 1000);
    // });
  }
}
