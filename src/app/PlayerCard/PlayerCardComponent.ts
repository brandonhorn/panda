import { Component, Input } from '@angular/core';
import { IPlayerCard } from '../Decks/Interfaces';

@Component({
    selector: 'player-card',
    templateUrl: './PlayerCardComponent.html',
    styleUrls: ['./PlayerCardComponent.css']
})
export class PlayerCardComponent {
    @Input() model: IPlayerCard;
}