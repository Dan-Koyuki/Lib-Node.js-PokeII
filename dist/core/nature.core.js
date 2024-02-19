"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNature = exports.findNatureByDisliking = exports.findNatureByLiking = exports.findNatureByDecreaseStat = exports.findNatureByIncreaseStat = exports.findNatureByName = void 0;
const nature_model_1 = require("../models/nature.model");
const helper_tools_1 = require("./tools/helper.tools");
/**
 * ?findByName - Find Specific Nature by its name.
 * @param {string} name - Name of natures ("adamant", "bashful", "bold", "brave", "calm", "careful", "docile", "gentle", "hardy", "hasty", "impish", "jolly", "lax", "lonely", "mild", "modest", "naive", "naughty", "quiet", "quirky", "rash", "relaxed", "sassy", "serious", "timid").
 * @returns {NatureModel} - Nature Object with matching name.
 */
const findNatureByName = (name) => {
    const valid = [
        "adamant",
        "bashful",
        "bold",
        "brave",
        "calm",
        "careful",
        "docile",
        "gentle",
        "hardy",
        "hasty",
        "impish",
        "jolly",
        "lax",
        "lonely",
        "mild",
        "modest",
        "naive",
        "naughty",
        "quiet",
        "quirky",
        "rash",
        "relaxed",
        "sassy",
        "serious",
        "timid",
    ];
    // Incase the Library is used up in JavaScript Project
    if (typeof name !== "string") {
        throw new Error("Invalid Nature name format!");
    }
    if (!valid.includes(name.toLowerCase())) {
        throw new Error(`${name} nature not found!`);
    }
    const req = (0, helper_tools_1.capitalize)(name);
    const res = nature_model_1.Natures.find((nature) => nature.name === req) || nature_model_1.Natures[0];
    return res;
};
exports.findNatureByName = findNatureByName;
/**
 * ?findByIncreaseStat - Find all Natures that increase a stat.
 * @param {string} stat - ['atk', 'def', 'spa', 'spd', 'speed']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
const findNatureByIncreaseStat = (stat) => {
    const valid = ['atk', 'def', 'spa', 'spd', 'speed'];
    if (typeof stat !== 'string') {
        throw new Error("Invalid Stat Format!");
    }
    if (!valid.includes(stat.toLowerCase())) {
        throw new Error('Stat not Found!');
    }
    const res = nature_model_1.Natures.filter(nature => nature.increase === stat.toLowerCase());
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Nature that Increase ${stat}`);
    return res;
};
exports.findNatureByIncreaseStat = findNatureByIncreaseStat;
/**
 * ?findByDecreaseStat - Find all Natures that decrease a stat.
 * @param {string} stat - ['atk', 'def', 'spa', 'spd', 'speed']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
const findNatureByDecreaseStat = (stat) => {
    const valid = ['atk', 'def', 'spa', 'spd', 'speed'];
    if (typeof stat !== 'string') {
        throw new Error("Invalid Stat Format!");
    }
    if (!valid.includes(stat.toLowerCase())) {
        throw new Error('Stat not Found!');
    }
    const res = nature_model_1.Natures.filter(nature => nature.decrease === stat.toLowerCase());
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Nature that Decrease ${stat}`);
    return res;
};
exports.findNatureByDecreaseStat = findNatureByDecreaseStat;
/**
 * ?findByLiking - Find all Natures that like certain flavor.
 * @param {string} flavor - ['spicy', 'sour', 'dry', 'bitter', 'sweet']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
const findNatureByLiking = (flavor) => {
    const valid = ['spicy', 'sour', 'dry', 'bitter', 'sweet'];
    if (typeof flavor !== 'string') {
        throw new Error("Invalid Flavor!");
    }
    if (!valid.includes(flavor.toLowerCase())) {
        throw new Error(`No Nature that Like ${flavor} flavor`);
    }
    const res = nature_model_1.Natures.filter(nature => nature.like === flavor.toLowerCase());
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Nature that Like ${flavor} flavor`);
    return res;
};
exports.findNatureByLiking = findNatureByLiking;
/**
 * ?findByDisliking - Find all Natures that dislike certain flavor.
 * @param {string} flavor - ['spicy', 'sour', 'dry', 'bitter', 'sweet']
 * @returns {NatureModel[]} - Array of Nature object that match with filter.
 */
const findNatureByDisliking = (flavor) => {
    const valid = ['spicy', 'sour', 'dry', 'bitter', 'sweet'];
    if (typeof flavor !== 'string') {
        throw new Error("Invalid Flavor!");
    }
    if (!valid.includes(flavor.toLowerCase())) {
        throw new Error(`No Nature that Dislike ${flavor} flavor`);
    }
    const res = nature_model_1.Natures.filter(nature => nature.dislike === flavor.toLowerCase());
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Nature that Dislike ${flavor} flavor`);
    return res;
};
exports.findNatureByDisliking = findNatureByDisliking;
const getAllNature = () => {
    return nature_model_1.Natures;
};
exports.getAllNature = getAllNature;
