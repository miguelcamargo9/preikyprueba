import { UserDetailsComponent } from './user-details/user-details.component';
import { CreditcardDetailsComponent } from './creditcard-details/creditcard-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateMovementComponent } from './create-movement/create-movement.component';
import { CreateCreditcardComponent } from './create-creditcard/create-creditcard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: "user/:id", component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: "creditcard", canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: CreditcardDetailsComponent,
      }, {
        path: 'add/:id',
        component: CreateCreditcardComponent,
      }
    ]
  },
  { path: 'movement/add/:id', component: CreateMovementComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'add', component: CreateUserComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
