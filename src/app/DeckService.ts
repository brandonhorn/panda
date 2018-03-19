import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { IPlayerCard, IInfectionCard } from './Decks/Interfaces';
import { VanillaPlayerDeck, VanillaInfectionDeck } from './Decks/VanillaPlayer';

@Injectable()
export class DeckService {
    private _playerDeck: ReplaySubject<IPlayerCard[]> = new ReplaySubject(1);
    private _infectionDeck: ReplaySubject<IPlayerCard[]> = new ReplaySubject(1);
    constructor() { 
        this._playerDeck.next(VanillaPlayerDeck);
        this._infectionDeck.next(VanillaInfectionDeck);
    }

    public get playerDeck(): Observable<IPlayerCard[]> {
        return this._playerDeck;
    }

    public get infectionDeck(): Observable<IInfectionCard[]> {
        return this._infectionDeck;
    }
}