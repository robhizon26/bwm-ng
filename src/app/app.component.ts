import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  componentTitle = "I am a component from a component.ts";

  clickHandler() {
    alert("I am clicked");
  }
}
