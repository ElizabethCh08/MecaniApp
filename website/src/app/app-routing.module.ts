import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { MechanicProfileComponent } from './pages/mechanic-profile/mechanic-profile.component';
import { MechanicalworkshopComponent } from './pages/mechanicalworkshop/mechanicalworkshop.component';
import { RegisterComponent } from './pages/register/register.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'requests', component: RequestsComponent},
  { path: 'form', component: FormComponent},
  { path: 'mechanic-profile', component: MechanicProfileComponent},
  { path: 'mechanicalworkshop', component: MechanicalworkshopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
