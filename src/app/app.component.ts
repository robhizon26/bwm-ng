import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  componentTitle = "I am a component from a component.ts";
  constructor(private route: ActivatedRoute) {}
  clickHandler() {
    alert("I am clicked");
  }
}
