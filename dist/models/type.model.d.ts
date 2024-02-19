import { PokemonType } from "./helper.enum";
export interface TypeModel {
    id: PokemonType;
    effect: {
        noDamage: PokemonType[];
        half: PokemonType[];
        double: PokemonType[];
        neutral: PokemonType[];
    };
}
export declare const Types: TypeModel[];
