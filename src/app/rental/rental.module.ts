import { AuthGuard } from "./../auth/shared/auth.guard";
import { MapModule } from "./../common/map/map.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Daterangepicker } from "ng2-daterangepicker";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { NgPipesModule } from "ngx-pipes";

import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalListItemComponent } from "./rental-list-item/rental-list-item.component";
import { RentalComponent } from "./rental.component";
import { RentalDetailComponent } from "./rental-detail/rental-detail.component";
import { MapComponent } from "../common/map/map.component";
import { RentalDetailBookingComponent } from "./rental-detail/rental-detail-booking/rental-detail-booking.component";
import { RentalSearchComponent } from "./rental-search/rental-search.component";
import { RentalCreateComponent } from "./rental-create/rental-create.component";

import { BookingService } from "../booking/shared/booking.service";
import { HelperService } from "./../common/service/helper.service";
import { UppercasePipe } from "./../common/pipes/uppercase.pipe";
import { RentalService } from "./shared/rental.service";

const routes: Routes = [
  {
    path: "rentals",
    component: RentalComponent,
    children: [
      { path: "", component: RentalListComponent },
      {
        path: "new",
        component: RentalCreateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ":rentalId",
        component: RentalDetailComponent
      },
      {
        path: ":city/homes",
        component: RentalSearchComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalDetailBookingComponent,
    RentalSearchComponent,
    RentalCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker,
    FormsModule
  ],
  exports: [],
  providers: [RentalService, HelperService, BookingService]
})
export class RentalModule {}
