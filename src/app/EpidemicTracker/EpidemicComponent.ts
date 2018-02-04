import { Component, Input, EventEmitter } from '@angular/core';
import { IInfectionCard } from '../InfectionDeck/interfaces';

@Component({
  selector: 'epidemic-tracker',
  templateUrl: './EpidemicComponent.html',
  styleUrls: ['./EpidemicComponent.css']
})
export class EpidemicComponent {
    @Input() epidemicEvent: EventEmitter<void>;

    public epidemic(): void {
        if (this.epidemicEvent) {
            this.epidemicEvent.emit();
        }
    }
}