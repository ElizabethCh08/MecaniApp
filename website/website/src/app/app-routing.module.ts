import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'requests', component: RequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
