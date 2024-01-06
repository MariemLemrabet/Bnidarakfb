import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { ProduitsModule } from './produits/produits.module';
import { HttpClientModule } from '@angular/common/http';
import { EquipeComponent } from './equipe/components/equipe/equipe.component';
import { EquipeModule } from './equipe/equipe.module';



@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    EquipeModule,
    ProduitsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
