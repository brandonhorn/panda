import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { IPlayerCard, IInfectionCard, IDecks } from './Decks/Interfaces';
import { VanillaPlayerDeck, VanillaInfectionDeck } from './Decks/VanillaPlayer';

@Injectable()
export class DeckService {
    private _selectedDecks: ReplaySubject<IDecks> = new ReplaySubject(1);
    
    public vanillaDeck: IDecks = {
        playerDeck: VanillaPlayerDeck,
        infectionDeck: VanillaInfectionDeck
    } 

    constructor() { 
        this._selectedDecks.next(this.vanillaDeck);
    }

    public get selectedDecks(): Observable<IDecks> {
        return this._selectedDecks;
    }

    public get playerDeck(): Observable<IPlayerCard[]> {
        return this.selectedDecks.map(d => d.playerDeck);
    }

    public get infectionDeck(): Observable<IInfectionCard[]> {
        return this.selectedDecks.map(d => d.infectionDeck);
    }

    public setDecks(decks: IDecks): void {
        this._selectedDecks.next(decks);
    }
}