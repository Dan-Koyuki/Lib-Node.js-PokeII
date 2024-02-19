"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTypes = exports.findTypeByName = void 0;
const type_model_1 = require("../models/type.model");
const helper_tools_1 = require("./tools/helper.tools");
const findTypeByName = (name) => {
    const valid = [
        "fire",
        "normal",
        "grass",
        "water",
        "electric",
        "ground",
        "rock",
        "ice",
        "steel",
        "dragon",
        "dark",
        "ghost",
        "bug",
        "fighting",
        "flying",
        "psychic",
        "fairy",
        "poison",
    ];
    if (typeof name !== "string" || !valid.includes(name.toLowerCase())) {
        throw new Error("Invalid Type! Please provide a correct Type of Pokemon");
    }
    const res = type_model_1.Types.find((type) => type.id === (0, helper_tools_1.capitalize)(name)) || type_model_1.Types[0];
    return res;
};
exports.findTypeByName = findTypeByName;
const getAllTypes = () => {
    return type_model_1.Types;
};
exports.getAllTypes = getAllTypes;
