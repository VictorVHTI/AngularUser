import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./users/add-user/add-user.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "users", component: UsersComponent },
  { path: "user-details/:userId", component: UserDetailComponent},
  { path: "add-user", component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
