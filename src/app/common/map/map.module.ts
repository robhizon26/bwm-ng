import { MapService } from "./map.service";
import { MapComponent } from "./map.component";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDYj1v6HW4STGy8s4WkQwXwoAO_zWnQSpA"
    })
  ],
  providers: [MapService]
})
export class MapModule {}
