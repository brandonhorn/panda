import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfectionDeckComponent } from './InfectionDeck/InfectionDeckComponent';
import { InfectionCardComponent } from './InfectionCard/InfectionCardComponent';


@NgModule({
  declarations: [
    AppComponent,
    InfectionDeckComponent,
    InfectionCardComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
