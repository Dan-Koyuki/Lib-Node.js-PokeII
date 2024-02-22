"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingNo = void 0;
const helper_enum_1 = require("../helper.enum");
exports.MissingNo = {
    id: "0000",
    name: "MissingNo",
    region: "Unknown",
    types: [helper_enum_1.PokemonType.UNKNOWN],
    abilities: {
        normal: ["Unknown"],
    },
    frontSprite: {
        normal: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
        shiny: "https://projectpokemon.org/images/shiny-sprite/bulbasaur.gif",
    },
    stats: {
        hp: "0",
        atk: "0",
        def: "0",
        spa: "0",
        spd: "0",
        speed: "0",
    },
    eggGroups: [helper_enum_1.EggGroup.UNKNOWN],
    genderRatios: [0, 0],
    description: "No Pokemon Found!",
    height: 0,
    weight: 0,
};
