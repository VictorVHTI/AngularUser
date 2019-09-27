import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/models/user";
import { UsersService } from "../../shared/services/users/users.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UsersService
    ) {}

  ngOnInit() {
    this.addUserForm = this._formBuilder.group({
      last_name: ["", [Validators.required, Validators.minLength(5)]],
      first_name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
  onSubmit() {
    if (this.addUserForm.valid) {
      // do call here
      //this.color_valid = true;
      const newUser: User = {
        first_name: this.addUserForm.get("first_name").value,
        last_name: this.addUserForm.get("last_name").value,
        avatar: 'https://cdn1.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-512.png',
        id: Math.floor((Math.random() * 40) + 20),
        email: this.addUserForm.get("email").value

      };
      this._userService.postNewUser(newUser).subscribe(response => {
        console.log(response);

      });
    } else {
      //this.color_valid = false;
      // show some error.
    }
  }
}
