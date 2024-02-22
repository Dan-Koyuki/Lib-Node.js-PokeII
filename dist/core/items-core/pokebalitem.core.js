"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPokeBall = exports.findPokeBallByName = void 0;
const items_model_1 = require("../../models/items-model/items.model");
const pokeballitem_model_1 = require("../../models/items-model/pokeballitem.model");
const helper_tools_1 = require("../tools/helper.tools");
/**
 *
 * @param {string} name - name of Pokeball (Poke Ball, Great Ball, Ultra Ball, etc.) make sure to use space between 'name' and Ball;
 * @returns - corresponding Pokeball object.
 */
const findPokeBallByName = (name) => {
    if (typeof name !== 'string') {
        throw new Error("Invalid PokeBall Name Format!");
    }
    const req = (0, helper_tools_1.capitalize)(name);
    const res = pokeballitem_model_1.PokeBall.find((pokeball) => pokeball.name === req) || items_model_1.PokeballError;
    if (res === items_model_1.PokeballError) {
        throw new Error("No PokeBall found!");
    }
    return res;
};
exports.findPokeBallByName = findPokeBallByName;
const getAllPokeBall = () => {
    return pokeballitem_model_1.PokeBall;
};
exports.getAllPokeBall = getAllPokeBall;
