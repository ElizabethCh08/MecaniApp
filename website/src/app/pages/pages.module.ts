import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { ComponentsModule } from '../components/components.module';
import { RegisterComponent } from './register/register.component';
import { RequestsComponent } from './requests/requests.component';
import { FormComponent } from './form/form.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { MechanicalworkshopComponent } from './mechanicalworkshop/mechanicalworkshop.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    SigninComponent,
    RegisterComponent,
    RequestsComponent,
    FormComponent,
    MechanicProfileComponent,
    MechanicalworkshopComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
