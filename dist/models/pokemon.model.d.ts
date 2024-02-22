import { EggGroup, PokemonType } from "./helper.enum";
export interface PokemonModel {
    id: string;
    name: string;
    region: string;
    types: PokemonType[];
    height: number;
    weight: number;
    abilities: {
        normal: string[];
        hidden?: string;
    };
    frontSprite: {
        normal: string;
        shiny: string;
    };
    backSprite?: {
        normal: string;
        shiny: string;
    };
    stats: {
        hp: string;
        atk: string;
        def: string;
        spa: string;
        spd: string;
        speed: string;
        [key: string]: string;
    };
    eggGroups: EggGroup[];
    genderRatios: number[];
    description: string;
}
export declare const Pokemon: PokemonModel[];
