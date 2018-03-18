import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule, Dialog } from 'primeng/dialog';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { InfectionDeckComponent } from './InfectionDeck/InfectionDeckComponent';
import { InfectionCardComponent } from './InfectionCard/InfectionCardComponent';
import { EpidemicComponent } from './EpidemicTracker/EpidemicComponent';
import { DeckService } from './DeckService';
import { PlayerCardComponent } from './PlayerCard/PlayerCardComponent';


@NgModule({
  declarations: [
    AppComponent,
    InfectionDeckComponent,
    InfectionCardComponent,
    EpidemicComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [ 
    ConfirmationService,
    DeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
