"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomTMsPerPage = exports.getTMsPerPage = exports.getAllMachine = exports.findMachineByRecipe = exports.findMachineByPrice = exports.findMachineByMoves = exports.findMachineByID = void 0;
const machineitem_model_1 = require("../../models/items-model/machineitem.model");
const helper_tools_1 = require("../tools/helper.tools");
/**
 * ?findMachineByID - find a corresponding TM by its ID;
 * @param {string} idNumber - 3-digit numeric character. (e.g. '001', '002', etc.);
 * @returns - Object of a TM that match with the filter;
 */
const findMachineByID = (idNumber) => {
    // validation for the input parameter.
    if (idNumber.length !== 3) {
        throw new Error("Invalid ID format. ID must be 3-digit numeric character.");
    }
    // Javascript Error Handle.
    if (typeof idNumber !== "string") {
        throw new Error("Invalid ID format. ID must be a string!");
    }
    // search for a TM in the Array, return first element if no matching ID.
    const res = machineitem_model_1.TM.find((tm) => tm.id === idNumber) || machineitem_model_1.TM[0];
    // throw an error if res return first element of the Array.
    if (res.id === "000") {
        throw new Error("TM not found!");
    }
    return res;
};
exports.findMachineByID = findMachineByID;
/**
 * ?findMachineByMoves - find a corresponding TM by moves it teaches;
 * @param {string} moveName - Name of Pokemon Moves;
 * @returns - Object of a TM that teach pokemon a certain moves;
 */
const findMachineByMoves = (moveName) => {
    if (typeof moveName !== "string") {
        throw new Error("Invalid Move Name format. Move Name must be a string!");
    }
    const res = machineitem_model_1.TM.find((tm) => tm.moves === (0, helper_tools_1.capitalize)(moveName)) || machineitem_model_1.TM[0];
    if (res.id === "000") {
        throw new Error("TM not found! ");
    }
    return res;
};
exports.findMachineByMoves = findMachineByMoves;
/**
 * ?findMachineByPrice - find all corresponding TM by its price (sell value or cost);
 * @param {number} price - cost/sell value of TM (200, 400, 2000, 3000, etc.);
 * @returns - Array of TM Objects that match with the filter;
 */
const findMachineByPrice = (price) => {
    if (typeof price !== 'number') {
        throw new Error("Invalid Price Number. Price must be numeric character!");
    }
    const res = machineitem_model_1.TM.filter((tm) => tm.price === price);
    (0, helper_tools_1.throwErrorIfEmpty)(res, "No TM.");
    return res;
};
exports.findMachineByPrice = findMachineByPrice;
/**
 * ?findMachineByRecipe - find all corresponding TM by its Recipe's Ingredient;
 * @param {string} ingredient - Ingredient to craft a TM based on Scarlet/Violet (Azurill Fur, Lechonk Hair, etc.);
 * @returns - Array of TM Object that have input Ingredient in their recipe;
 */
const findMachineByRecipe = (ingredient) => {
    if (typeof ingredient !== 'string') {
        throw new Error("Invalid Ingredient format. Ingredient must be a string!");
    }
    const res = machineitem_model_1.TM.filter((tm) => tm.recipe.some((ing) => ing.includes((0, helper_tools_1.capitalize)(ingredient))));
    (0, helper_tools_1.throwErrorIfEmpty)(res, "Unidentified Ingredient. No TM Found!");
    return res;
};
exports.findMachineByRecipe = findMachineByRecipe;
const getAllMachine = () => {
    return machineitem_model_1.TM.slice(1);
};
exports.getAllMachine = getAllMachine;
const TMsPerPage = 10;
const getTMsPerPage = (pageNumber) => {
    const TMs = machineitem_model_1.TM.slice(1);
    const startIndex = (pageNumber - 1) * TMsPerPage;
    const endIndex = startIndex + TMsPerPage;
    return TMs.slice(startIndex, endIndex);
};
exports.getTMsPerPage = getTMsPerPage;
const getCustomTMsPerPage = (pageNumber, itemsPerPage) => {
    const TMs = machineitem_model_1.TM.slice(1);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return TMs.slice(startIndex, endIndex);
};
exports.getCustomTMsPerPage = getCustomTMsPerPage;
