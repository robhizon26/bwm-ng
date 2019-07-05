import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MapService } from "./map.service";
import { MapComponent } from "./map.component";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { CamelizePipe } from "ngx-pipes";
@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD2Qk48DID3VIl-qMn8mB1hN1HXWl9bwkg"
    }),
    CommonModule
  ],
  providers: [MapService, CamelizePipe]
})
export class MapModule {}
