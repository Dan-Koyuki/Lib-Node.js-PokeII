"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TMError = exports.PokeballError = void 0;
const helper_enum_1 = require("../helper.enum");
exports.PokeballError = {
    id: "000",
    name: "Broken Ball",
    gen: "BROKEN",
    price: 0,
    sell_price: 0,
    catch_rate: {
        normal: 0,
    },
    description: "Always Failed.",
    notes: "This is an Error Flag.",
    category: helper_enum_1.BagCategory.BALLS,
};
exports.TMError = {
    id: "000",
    name: "TM000",
    moves: "Unknown",
    description: "Teaches Nothing to compatible Pokemon.",
    price: 0,
    recipe: ["Arceus Ring"],
    category: helper_enum_1.BagCategory.MACHINES,
};
