import { Component, OnInit } from '@angular/core';
import { UsersService } from "../shared/services/users/users.service";
import { NavExtrasService } from "../shared/services/nav/nav.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  numberPage: number = 1;
  totalPages: number = 5;
  listUsers: Array<any> ;
  constructor(
    private _userService: UsersService,
    private _router: Router,
    private _navExtras: NavExtrasService
  ) { 



  }

  ngOnInit() {
    this.getListUser(this.numberPage);
  }

  getListUser(page){
    this._userService.getUsers(page).subscribe(response => {
      console.log(response);
      this.listUsers = response.data;
    });
  }


  pageChanged(event: any): void {
    this.getListUser(event.page);
  }


}
