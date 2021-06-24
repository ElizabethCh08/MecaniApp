import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Navbar2Component } from './navbar2/navbar2.component';



@NgModule({
  declarations: [
    SidebarComponent,
    Navbar2Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    Navbar2Component
  ]
})
export class ComponentsModule { }
