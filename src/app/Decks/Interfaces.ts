export const EPIDEMIC_NAME: string = 'Epidemic';

export interface IDecks {
    playerDeck: IPlayerCard[];
    infectionDeck: IInfectionCard[];
}

export interface IPlayerCard {
    name: string;
    color: string;
    count?: number;
    powerups?: string[];
}

export interface IInfectionCard {
    name: string;
    color: string;
}

export const flavors = {
    blue: 'blue',
    red: 'red',
    yellow: 'yellow',
    black: 'black',
    infection: 'infection',
    event: 'event'
}

export const s2colors = {
    supply: 'supply'
}