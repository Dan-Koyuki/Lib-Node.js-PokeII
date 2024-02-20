import { TMModel } from "../../models/items-model/machineitem.model";
/**
 * ?findMachineByID - find a corresponding TM by its ID;
 * @param {string} idNumber - 3-digit numeric character. (e.g. '001', '002', etc.);
 * @returns - Object of a TM that match with the filter;
 */
export declare const findMachineByID: (idNumber: string) => TMModel;
/**
 * ?findMachineByMoves - find a corresponding TM by moves it teaches;
 * @param {string} moveName - Name of Pokemon Moves;
 * @returns - Object of a TM that teach pokemon a certain moves;
 */
export declare const findMachineByMoves: (moveName: string) => TMModel;
/**
 * ?findMachineByPrice - find all corresponding TM by its price (sell value or cost);
 * @param {number} price - cost/sell value of TM (200, 400, 2000, 3000, etc.);
 * @returns - Array of TM Objects that match with the filter;
 */
export declare const findMachineByPrice: (price: number) => TMModel[];
/**
 * ?findMachineByRecipe - find all corresponding TM by its Recipe's Ingredient;
 * @param {string} ingredient - Ingredient to craft a TM based on Scarlet/Violet (Azurill Fur, Lechonk Hair, etc.);
 * @returns - Array of TM Object that have input Ingredient in their recipe;
 */
export declare const findMachineByRecipe: (ingredient: string) => TMModel[];
export declare const getAllMachine: () => TMModel[];
export declare const getTMsPerPage: (pageNumber: number) => TMModel[];
export declare const getCustomTMsPerPage: (pageNumber: number, itemsPerPage: number) => TMModel[];
