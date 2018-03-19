import { Component, Input } from '@angular/core';
import { IInfectionCard } from '../Decks/Interfaces';

@Component({
  selector: 'infection-card',
  templateUrl: './InfectionCardComponent.html',
  styleUrls: ['./InfectionCardComponent.css']
})
export class InfectionCardComponent {
    @Input() model: IInfectionCard;
    @Input() selectHandler: () => void;
    @Input() deleteHandler: () => void;
    @Input() undoSelectHandler: () => void;
}