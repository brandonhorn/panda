import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { IPlayerCard } from './Decks/Interfaces';
import { VanillaPlayerDeck } from './Decks/VanillaPlayer';

@Injectable()
export class DeckService {
    private _playerDeck: ReplaySubject<IPlayerCard[]> = new ReplaySubject(1);
    constructor() { 
        this._playerDeck.next(VanillaPlayerDeck);
    }

    public get playerDeck(): Observable<IPlayerCard[]> {
        return this._playerDeck;
    }
}