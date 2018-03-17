import { Component, Input, EventEmitter } from '@angular/core';
import { IInfectionCard } from '../InfectionDeck/interfaces';
import { IPlayerCard, EPIDEMIC_NAME } from '../Decks/Interfaces';
import { DeckService } from '../DeckService';


interface IEpiMiniStack {
    hasEpidemic: boolean;
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
    public drawnStack: IPlayerCard[];
    public stacks: IEpiMiniStack[] = [];
    public modalVisible: boolean = false;

    constructor(private _deckService: DeckService) {
        this._deckService.playerDeck.subscribe(deck => {
            
        });
    }

    public drawCard(event: {value: IPlayerCard}): void {
        if (event.value.name === EPIDEMIC_NAME) {
            this.stacks[0].hasEpidemic = true;
            if (this.epidemicEvent) {
                this.epidemicEvent.emit();
            }
        } else {
            this.drawnStack.push(event.value);
        }
        this.stacks[0].count--;
        if (this.stacks[0].count === 0) {
            this.stacks.pop();
        }
    }
}