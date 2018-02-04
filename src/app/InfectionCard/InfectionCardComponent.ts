import { Component, Input } from '@angular/core';
import { IInfectionCard } from '../InfectionDeck/interfaces';

@Component({
  selector: 'infection-card',
  templateUrl: './InfectionCardComponent.html',
  styleUrls: ['./InfectionCardComponent.css']
})
export class InfectionCardComponent {
    @Input() model: IInfectionCard;
    @Input() selectHandler: () => void;
    @Input() deleteHandler: () => void;


    handleSelect(): void {
        this.selectHandler();
    }
}