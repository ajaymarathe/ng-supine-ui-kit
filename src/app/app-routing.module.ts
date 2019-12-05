import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* import ur component here*/
import { RegsiterComponent } from './regsiter/regsiter.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegsiterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
