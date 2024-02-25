import { PokemonModel } from "../models/pokemons-model/pokemons.model";
/**
 * ?findPokemonById - Find a specific Pokemon by its ID.
 * @param {string} id - 4-digit ID of the Pokemon (e.g., "0001" - "0898").
 * @returns {PokemonModel} - Pokemon object with the matching ID or MissingNo if no match Pokemon.
 */
export declare const findPokemonById: (id: string) => PokemonModel;
/**
 * ?findPokemonByName - Find a specific Pokemon by its Name.
 * @param {string} name - Name of the Pokemon (e.g., "Bulbasaur" - "Calyrex").
 * @returns {PokemonModel} - Pokemon object with the matching Name or MissingNo if no match Pokemon.
 */
export declare const findPokemonByName: (name: string) => PokemonModel;
/**
 * ?findPokemonByRegion - Find all Pokemon from a Region.
 * @param {string} region - name of Region ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "hisui", "galar", "paldea"].
 * @returns {PokemonModel[]} - array of Pokemon object with the matchin Region.
 */
export declare const findPokemonByRegion: (region: string) => PokemonModel[];
/**
 * ?findPokemonByType - Find all Pokemon with certain Type.
 * @param {string} type - name of Type (e.g., 'grass', 'fire').
 * @returns {PokemonModel[]} - array of Pokemon object with matching Type.
 */
export declare const findPokemonByType: (type: string) => PokemonModel[];
/**
 * ?findPokemonByTypes - Find all Pokemon with certain Types Combination. Order of type doesn't matter.
 * @param {string[]} types - Array of Types (e.g., ['grass', 'poison'], ['fire', 'water']).
 * @returns {PokemonModel[]} - Array of Pokemon objects with matching type combination.
 */
export declare const findPokemonByTypes: (types: string[]) => PokemonModel[];
/**
 * ?findPokemonByAbility - Find all Pokemon with certain Ability.
 * @param {string} ability - name of Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {PokemonModel[]} array of Pokemon objects with the matching Ability.
 */
export declare const findPokemonByAbility: (ability: string) => PokemonModel[];
/**
 * ?findPokemonByHiddenAbility - Find all Pokemon with certain Hidden Ability.
 * @param {string} ability - name of Hidden Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {PokemonModel[]} array of Pokemon objects with the matching Hidden Ability.
 */
export declare const findPokemonByHiddenAbility: (ability: string) => PokemonModel[];
/**
 * ?findPokemonByNormalAbility - Find all Pokemon with certain Normal Ability.
 * @param {string} ability - name of Hidden Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {PokemonModel[]} array of Pokemon objects with the matching Normal Ability.
 */
export declare const findPokemonByNormalAbility: (ability: string) => PokemonModel[];
/**
 * ?findPokemonByBaseStat - Find all Pokemon that have the specified base stat.
 * @param {number | string} stat - Base stat of the Pokemon to search for.
 * @param {string} statType - Type of base stat ('hp', 'atk', 'def', 'spa', 'spd', 'speed').
 * @return {PokemonModel[]} - Array of Pokemon objects with matching base stat.
 */
export declare const findPokemonByBaseStat: (stat: number | string, statType: string) => PokemonModel[];
/**
 * ?findPokemonByEggGroup - Find all Pokemon with certain Egg Group
 * @param {string} eggGroup -  Egg Group of the Pokemon (e.g., 'monster', 'grass', 'dragon', 'field').
 * @returns {PokemonModel[]} - Array of Pokemon object with matching Egg Group.
 */
export declare const findPokemonByEggGroup: (eggGroup: string) => PokemonModel[];
/**
 * ?findPokemonByGenderRatio - Find all Pokemon that have the specified Gender Ratio.
 * @param {number} ratio - Gender Ratio of the Pokemon (0, 12.5, 25, 50, 75, 87.5, 100).
 * @param {string} gender - Gender of the Pokemon ('male' or 'female').
 * @returns {PokemonModel[]} array of Pokemon objects with matching Ratio.
 */
export declare const findPokemonByGenderRatio: (ratio: number, gender: string) => PokemonModel[];
/**
 *
 * @param {string} category - catgeory of the Pokemon (Pseudo Legendary, Legendary, Mythical)
 * @returns - Array that include all corresponding pokemon;
 */
export declare const findPokemonByCategory: (category: string) => PokemonModel[];
/**
 * @returns - all pokemon object you can have.. careful there are more or less around 890 object. big object in fact. use the page one if you worried..
 */
export declare const getAllPokemon: () => PokemonModel[];
export declare const getThirtyPokemon: (pagesNumber: number) => PokemonModel[];
/**
 * Retrieve Pokemon objects with custom items per page. Handle the calculations by yourself.
 * @param pageNumber - The page number to retrieve.
 * @param itemsPerPage - The number of items per page.
 * @returns - An array of PokemonModel objects based on the specified page and items per page.
 */
export declare const getCustomPokemonPerPage: (pageNumber: number, itemsPerPage: number) => PokemonModel[];
export declare const sortPokemonByWeight: (order: string) => PokemonModel[];
export declare const sortPokemonByHeight: (order: string) => PokemonModel[];
export declare const sortPokemonByName: (order: string) => PokemonModel[];
/**
 * todo - Create Advance Filter (Filter after Filter);
 * @param {PokemonModel[]} - Array of Filtered Pokemon;
 * @param {field} - field of second filter;
 * @returns - new Array of Pokemon that get more filter;
 */
