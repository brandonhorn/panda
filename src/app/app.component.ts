import { Component, EventEmitter } from '@angular/core';
import { IDecks } from './Decks/Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public epidemicEvent: EventEmitter<void> = new EventEmitter();
}
