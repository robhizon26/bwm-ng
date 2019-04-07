import { Component, OnInit, Input } from "@angular/core";
import { MapService } from "./map.service";

@Component({
  selector: "bwm-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  @Input() location: string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private mapservice: MapService) {}

  test() {
    this.mapservice.geocodeLocation(this.location).subscribe(coordinates => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
    });
  }
  ngOnInit() {}
  mapReadyHandler = () => {
    this.mapservice.geocodeLocation(this.location).subscribe(coordinates => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
    });
  };
}
