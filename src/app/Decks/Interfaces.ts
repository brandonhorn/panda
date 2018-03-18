export const EPIDEMIC_NAME: string = 'Epidemic';

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

export const colors = {
    blue: 'blue',
    red: 'red',
    yellow: 'yellow',
    black: 'black',
    infection: 'green',
    event: 'cyan'
}

export const s2colors = {
    supply: 'grey'
}