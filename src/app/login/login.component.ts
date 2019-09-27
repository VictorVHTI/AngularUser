import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Login } from "../shared/models/login";
import { TokenService } from "../shared/services/token/token.service";
import { UsersService } from "../shared/services/users/users.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  profile: any;
  color_valid: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UsersService,
    private _tokenService: TokenService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // do call here
      this.color_valid = true;
      const loginObject: Login = {
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value
      };
      this._userService.login(loginObject).subscribe(response => {
        console.log(response);
        this._tokenService.setActiveToken(response.token);
        this._router.navigateByUrl("users");
      });
    } else {
      this.color_valid = false;
      // show some error.
    }
  }
}
