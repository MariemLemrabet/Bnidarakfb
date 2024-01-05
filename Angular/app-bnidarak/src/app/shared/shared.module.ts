import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { NousComponent } from './components/nous/nous.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarComponent,
    ContacteComponent,
    NousComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports:[
    NavbarComponent,
    ContacteComponent,
    NousComponent
  ]
})
export class SharedModule { }
