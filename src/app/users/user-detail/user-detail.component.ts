import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from "../../shared/services/users/users.service";
import { NavExtrasService } from "../../shared/services/nav/nav.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: any;
  userData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _navExtras: NavExtrasService,
    private _userService: UsersService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(extras => {
      console.log(extras);
      this.id = extras.userId;
   });

   this._userService.getUserById(this.id).subscribe(response => {
    console.log(response);
    this.userData = response.data;
  });

  }

}
