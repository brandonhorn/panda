import { Component, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { IInfectionCard, IDecks } from '../Decks/Interfaces';
import { DeckService } from '../DeckService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'deck-selector',
  templateUrl: './DeckSelector.html',
  styleUrls: ['./DeckSelector.css']
})
export class DeckSelector {
    constructor(private _deckService: DeckService) {

    }

    public fileSelected(event: any): void {
        let file: File = event.target.files[0];
        if (!file) {
            return;
        }
        let myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
            let text = myReader.result;
            this._deckService.setDecks(JSON.parse(text));
        };
        myReader.readAsText(file);
    }

}