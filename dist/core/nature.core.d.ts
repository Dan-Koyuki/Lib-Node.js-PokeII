import { NatureModel } from "../models/nature.model";
/**
 * ?findByName - Find Specific Nature by its name.
 * @param {string} name - Name of natures ("adamant", "bashful", "bold", "brave", "calm", "careful", "docile", "gentle", "hardy", "hasty", "impish", "jolly", "lax", "lonely", "mild", "modest", "naive", "naughty", "quiet", "quirky", "rash", "relaxed", "sassy", "serious", "timid").
 * @returns {NatureModel} - Nature Object with matching name.
 */
export declare const findNatureByName: (name: string) => NatureModel;
/**
 * ?findByIncreaseStat - Find all Natures that increase a stat.
 * @param {string} stat - ['atk', 'def', 'spa', 'spd', 'speed']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
export declare const findNatureByIncreaseStat: (stat: string) => NatureModel[];
/**
 * ?findByDecreaseStat - Find all Natures that decrease a stat.
 * @param {string} stat - ['atk', 'def', 'spa', 'spd', 'speed']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
export declare const findNatureByDecreaseStat: (stat: string) => NatureModel[];
/**
 * ?findByLiking - Find all Natures that like certain flavor.
 * @param {string} flavor - ['spicy', 'sour', 'dry', 'bitter', 'sweet']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
export declare const findNatureByLiking: (flavor: string) => NatureModel[];
/**
 * ?findByDisliking - Find all Natures that dislike certain flavor.
 * @param {string} flavor - ['spicy', 'sour', 'dry', 'bitter', 'sweet']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
export declare const findNatureByDisliking: (flavor: string) => NatureModel[];
export declare const getAllNature: () => NatureModel[];
