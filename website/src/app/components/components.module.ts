import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { SidebarmechanicComponent } from './sidebarmechanic/sidebarmechanic.component';



@NgModule({
  declarations: [
    SidebarComponent,
    Navbar2Component,
    SidebarmechanicComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    Navbar2Component,
    SidebarmechanicComponent
  ]
})
export class ComponentsModule { }
