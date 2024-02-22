import { PokeBallModel } from "../../models/items-model/pokeballitem.model";
/**
 *
 * @param {string} name - name of Pokeball (Poke Ball, Great Ball, Ultra Ball, etc.) make sure to use space between 'name' and Ball;
 * @returns - corresponding Pokeball object.
 */
export declare const findPokeBallByName: (name: string) => PokeBallModel;
export declare const getAllPokeBall: () => PokeBallModel[];
