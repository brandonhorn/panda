import { Component, Input, EventEmitter } from '@angular/core';
import { IPlayerCard, EPIDEMIC_NAME, IInfectionCard } from '../Decks/Interfaces';
import { DeckService } from '../DeckService';
import { count } from 'rxjs/operators';


interface IEpiMiniStack {
    hasHadEpidemic: boolean;
    count: number;
}

@Component({
  selector: 'epidemic-tracker',
  templateUrl: './EpidemicComponent.html',
  styleUrls: ['./EpidemicComponent.css']
})
export class EpidemicComponent {
    @Input() epidemicEvent: EventEmitter<void>;

    public deckLength: number;
    public epidemicCount: number;
    public drawnStack: IPlayerCard[] = [];
    public stacks: IEpiMiniStack[] = [];
    public selectedCard: IPlayerCard;
    public modalVisible: boolean = false;
    private playerDeck: IPlayerCard[];

    constructor(private _deckService: DeckService) {
        this._deckService.playerDeck.subscribe(deck => {
            // Make copy, until returned from service
            this.playerDeck = deck.slice();

            this.deckLength = deck.length;
            this.epidemicCount = deck.find(card => card.name === EPIDEMIC_NAME).count;
            let minDiv = Math.floor(this.deckLength / this.epidemicCount);
            let remainder = this.epidemicCount - (this.deckLength - (minDiv * this.epidemicCount));
            for (let i = 0; i < this.epidemicCount; i++) {
                this.stacks.push({
                    hasHadEpidemic: false,
                    count: i >= remainder ? minDiv + 1 : minDiv 
                });
            }
        });
    }

    public get epidemicProbability(): string {
        let topDeck = this.stacks[this.stacks.length-1];
        let firstCardProb = topDeck.hasHadEpidemic ? 0 : 1.0 / topDeck.count;
        let nextDeck = topDeck.count > 1 ? topDeck : this.stacks[this.stacks.length-2];
        let secondCardProb = nextDeck.hasHadEpidemic ? 0 : 1.0 / nextDeck.count;
        return (100*(firstCardProb + secondCardProb)).toFixed(0);
    }

    public drawCard(): void {
        if (!this.selectedCard) {
            return;
        }
        this.modalVisible = false;
        if (this.selectedCard.name === EPIDEMIC_NAME) {
            this.stacks[this.stacks.length-1].hasHadEpidemic = true;
            if (this.epidemicEvent) {
                this.epidemicEvent.emit();
            }
        } else {
            this.drawnStack.push({
                name: this.selectedCard.name,
                color: this.selectedCard.color
            });
        }
        this.stacks[this.stacks.length-1].count--;
        if (this.stacks[this.stacks.length-1].count === 0) {
            this.stacks.pop();
        }
        if (this.selectedCard.count && this.selectedCard.count > 1) {
            this.selectedCard.count--;
        } else {
            this.playerDeck = this.playerDeck.filter(card => card !== this.selectedCard);
        }
        this.selectedCard = undefined;
    }
}