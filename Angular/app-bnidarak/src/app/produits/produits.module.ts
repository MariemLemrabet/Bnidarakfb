import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagasinComponent } from './components/magasin/magasin.component';
import { SaleteCaillouxComponent } from './components/salete-cailloux/salete-cailloux.component';



@NgModule({
  declarations: [
    MagasinComponent,
    SaleteCaillouxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MagasinComponent,
    SaleteCaillouxComponent
  ]
})
export class ProduitsModule { }
