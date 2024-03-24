"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialError = exports.BattleItemError = exports.TMError = exports.PokeballError = void 0;
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
    held: true
};
exports.TMError = {
    id: "000",
    name: "TM000",
    moves: "Unknown",
    description: "Teaches Nothing to compatible Pokemon.",
    price: 0,
    recipe: ["Arceus Ring"],
    category: helper_enum_1.BagCategory.MACHINES,
    held: false
};
exports.BattleItemError = {
    id: "00",
    name: "X None",
    description: "An item that sharply reduces All stat of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
    price: 0,
    sell_price: 0,
    category: helper_enum_1.BagCategory.BATTLEITEM,
    held: true,
    effect: {
        statFlag: helper_enum_1.Stat.NONE,
        multiplier: 0,
    }
};
exports.MaterialError = {
    id: '000',
    name: "Rayquaza\'s Skin",
    price: 0,
    league_point: 0,
};
