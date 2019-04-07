import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class MapService {
  private geoCoder;
  public geocodeLocation(location: string): Observable<any> {
    this.geoCoder = new (<any>window).google.maps.Geocoder();
    return new Observable(observer => {
      this.geoCoder.geocode({ address: location }, (result, status) => {
        //  console.log(" status.lat()", status);

        if (status === "OK") {
          const geometry = result[0].geometry.location;
          console.log(" geometry.lng()", geometry.lng());

          observer.next({ lat: geometry.lat(), lng: geometry.lng() });
        } else {
          observer.error("Location could not be geocoded");
        }
      });
    });
  }
}
