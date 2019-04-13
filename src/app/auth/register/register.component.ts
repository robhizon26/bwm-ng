import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "bwm-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  formData: any = {};
  errors: any[] = [];
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}
  register() {
    this.auth.register(this.formData).subscribe(
      () => {
        // console.log('register','success')
        this.router.navigate(["/login", { registered: "success" }]);
      },
      errrResponse => {
        this.errors = errrResponse.error.errors;
        // console.log('register error','errrResponse')
      }
    );
  }
}
