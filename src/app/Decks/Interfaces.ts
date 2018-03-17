export const EPIDEMIC_NAME: string = 'Epidemic';

export interface IPlayerCard {
    name: string;
    color: string;
    count?: number;
    powerups?: string[];
}