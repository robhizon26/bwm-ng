import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Rental } from "../shared/rental.model";
import { RentalService } from "../shared/rental.service";
import { Router } from "@angular/router";

@Component({
  selector: "bwm-rental-create",
  templateUrl: "./rental-create.component.html",
  styleUrls: ["./rental-create.component.scss"]
})
export class RentalCreateComponent implements OnInit {
  newRental: Rental;
  rentalCategories = Rental.CATEGORIES;
  errors: any[] = [];
  constructor(private rentalService: RentalService, private router: Router) {}

  ngOnInit() {
    this.newRental = new Rental();
    this.newRental.shared = false;
  }

  createRental() {
    this.rentalService.createRental(this.newRental).subscribe(
      (rental: Rental) => {
        this.router.navigate([`/rentals/${rental._id}`]);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      }
    );
  }
  handleImageChange() {
    this.newRental.image =
      "https://firebasestorage.googleapis.com/v0/b/pwagram-3b87c.appspot.com/o/sf-boat.jpg?alt=media&token=ecad83e6-3578-4566-954e-35bcc1b32792";
  }
}
