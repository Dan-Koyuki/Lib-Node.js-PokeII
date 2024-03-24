import { PokemonType } from "./helper.enum";
export interface MovesModel {
    id: string;
    name: string;
    description: string;
    power: number;
    pp: number;
    type: PokemonType;
    category: string;
    contestStat: string;
    effect: MovesEffect;
}
/**
 * trigger => Burn, Freeze, decrease stat, increase stat and more flag
 */
export interface MovesEffect {
    chance: number;
    trigger: string;
}
