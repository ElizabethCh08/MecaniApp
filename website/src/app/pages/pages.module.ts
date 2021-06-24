import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { ComponentsModule } from '../components/components.module';
import { RegisterComponent } from './register/register.component';
import { RequestsComponent } from './requests/requests.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    SigninComponent,
    RegisterComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
