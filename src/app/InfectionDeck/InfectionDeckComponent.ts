import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { IInfectionCard } from '../Decks/Interfaces';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'infection-deck',
  templateUrl: './InfectionDeckComponent.html',
  styleUrls: ['./InfectionDeckComponent.css']
})
export class InfectionDeckComponent implements OnInit {
    @Input() epidemicEvent: EventEmitter<void>;

    private decks: IInfectionCard[][] = [];
    private deckIndex: number;

    public currentDeck: IInfectionCard[];
    public discardDeck: IInfectionCard[] = [];
    public modalVisible: boolean = false;
    public selectedCardIndex = -1;

    constructor(private confirmationService: ConfirmationService) {
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
        this.stackDiscardDeck();
    }

    public ngOnInit(): void {
        this.epidemicEvent.subscribe(() => {
            this.modalVisible = true;
        });
    }

    public updateDiscardAndTop(): void {
        let lastDeck = this.decks[this.decks.length - 1];
        let card = lastDeck[this.selectedCardIndex];
        this.discardDeck.push(card);
        this.decks[this.decks.length - 1] = lastDeck.filter(c => c !== card);
        this.stackDiscardDeck();
        this.modalVisible = false;
        this.selectedCardIndex = -1;
    }

    public stackDiscardDeck(): void {
        this.discardDeck.sort((a, b) => {
            return a.name === b.name ? 0 :
                a.name < b.name ? 1 : -1;
        })
        this.decks.unshift(this.discardDeck);
        this.discardDeck = [];
        this.deckIndex = 0;
        this.currentDeck = this.decks[this.deckIndex];
    }

    // do we need shuffle on the computer?
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
            this.confirmationService.confirm({
                message: 'Are you sure that you want to remove card from board?',
                header: 'Confirmation',
                icon: 'fa fa-question-circle',
                accept: () => {
                    this.discardDeck = this.discardDeck.filter(c => c !== card);
                },
                reject: () => {}
            });
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