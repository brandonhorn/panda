import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { IPlayerCard } from './Decks/Interfaces';

@Injectable()
export class DeckService {
    private _playerDeck: ReplaySubject<IPlayerCard[]> = new ReplaySubject(1);
    constructor() { }

    public get playerDeck(): Observable<IPlayerCard[]> {
        return this._playerDeck;
    }
}