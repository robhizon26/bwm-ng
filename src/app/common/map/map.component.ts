import { Component, ChangeDetectorRef, Input } from "@angular/core";
import { MapService } from "./map.service";

@Component({
  selector: "bwm-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent {
  @Input() location: string;
  isPositionError: Boolean = false;
  lat: number;
  lng: number;
  constructor(private mapservice: MapService, private ref: ChangeDetectorRef) {}

  mapReadyHandler = () => {
    let currentLocation = this.location;
    // if (Math.round(Math.random() * 10) > 5) {
    //   currentLocation = "aqwekjlk2131233";
    // }
    this.mapservice.getGeoLocation(currentLocation).subscribe(
      coordinates => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.ref.detectChanges();
      },
      () => {
        this.isPositionError = true;
        this.ref.detectChanges();
      }
    );
  };
}
