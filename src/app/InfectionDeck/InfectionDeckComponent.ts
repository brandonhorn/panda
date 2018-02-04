import { Component } from '@angular/core';
import { IInfectionCard } from './interfaces';

@Component({
  selector: 'infection-deck',
  templateUrl: './InfectionDeckComponent.html',
  styleUrls: ['./InfectionDeckComponent.css']
})
export class InfectionDeckComponent {
    private decks: IInfectionCard[][] = [];
    private deckIndex: number;

    public currentDeck: IInfectionCard[];
    public discardDeck: IInfectionCard[] = [];

    constructor() {
        this.discardDeck = [ 
            {name: 'New York', color: 'blue'},
            {name: 'Washington', color: 'blue'},
            {name: 'London', color: 'blue'},
            {name: 'Jacksonville', color: 'yellow'},
            {name: 'Lagos', color: 'yellow'},
            {name: 'Sao Paolo', color: 'yellow'},
            {name: 'Cairo', color: 'black'},
            {name: 'Tripoli', color: 'black'},
            {name: 'Istanbul', color: 'black'},
        ];
        this.shuffleDiscardDeck();
    }

    public shuffleDiscardDeck(): void {
        let l = this.discardDeck.length;
        let i: number;
        let t: IInfectionCard;
        while (l) {
            i = Math.floor(Math.random() * l--);
            t = this.discardDeck[l];
            this.discardDeck[l] = this.discardDeck[i];
            this.discardDeck[i] = t;
        }
        this.decks.unshift(this.discardDeck);
        this.discardDeck = [];
        this.deckIndex = 0;
        this.currentDeck = this.decks[this.deckIndex];
    }

    public onCardDraw(card: IInfectionCard): void {
        
    }

    public previousSegment(): void {
        if (this.deckIndex === 0) {
            return;
        }
        this.deckIndex--;
    }

    public nextSegment(): void {
        if (this.deckIndex === this.decks.length - 1) {
            return;
        }
        this.deckIndex++;
    }

    public getDeleteCallback(card: IInfectionCard): () => void {
        return () => {
            this.discardDeck = this.discardDeck.filter(c => c !== card);
        };
    }

    public getSelectCallback(card: IInfectionCard): () => void {
        return () => {
            this.discardDeck.push(card);
            this.decks[0] = this.decks[0].filter(c => c !== card);
            if (this.decks[0].length === 0) {
                this.decks.shift();
            }
            this.deckIndex = 0;
            this.currentDeck = this.decks[this.deckIndex];
        };
    }
}