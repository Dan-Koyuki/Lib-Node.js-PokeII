"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomPokemonPerPage = exports.getThirtyPokemon = exports.getAllPokemon = exports.findPokemonByGenderRatio = exports.findPokemonByEggGroup = exports.findPokemonByBaseStat = exports.findPokemonByNormalAbility = exports.findPokemonByHiddenAbility = exports.findPokemonByAbility = exports.findPokemonByTypes = exports.findPokemonByType = exports.findPokemonByRegion = exports.findPokemonByName = exports.findPokemonById = void 0;
const pokemon_model_1 = require("../models/pokemon.model");
const helper_tools_1 = require("./tools/helper.tools");
/**
 * ?findPokemonById - Find a specific Pokemon by its ID.
 * @param {string} id - 4-digit ID of the Pokemon (e.g., "0001" - "0898").
 * @returns {PokemonModel} - Pokemon object with the matching ID or MissingNo if no match Pokemon.
 */
const findPokemonById = (id) => {
    if (typeof id !== "string" || id.length !== 4) {
        throw new Error("Invalid ID format. Please provide a 4-digit numeric ID.");
    }
    const res = pokemon_model_1.Pokemon.find((pokemon) => pokemon.id === id) || pokemon_model_1.Pokemon[0];
    if (res.id === "0000") {
        throw new Error("MissingNo!");
    }
    return res;
};
exports.findPokemonById = findPokemonById;
/**
 * ?findPokemonByName - Find a specific Pokemon by its Name.
 * @param {string} name - Name of the Pokemon (e.g., "Bulbasaur" - "Calyrex").
 * @returns {PokemonModel} - Pokemon object with the matching Name or MissingNo if no match Pokemon.
 */
const findPokemonByName = (name) => {
    if (typeof name !== "string") {
        throw new Error("Invalid Pokemon Name. Please Provide a correct Pokemon Name.");
    }
    const req = (0, helper_tools_1.capitalize)(name);
    const res = pokemon_model_1.Pokemon.find((pokemon) => pokemon.name === req) || pokemon_model_1.Pokemon[0];
    if (res.id === "0000") {
        throw new Error("MissingNo!");
    }
    return res;
};
exports.findPokemonByName = findPokemonByName;
/**
 * ?findPokemonByRegion - Find all Pokemon from a Region.
 * @param {string} region - name of Region ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "hisui", "galar", "paldea"].
 * @returns {PokemonModel[]} - array of Pokemon object with the matchin Region.
 */
const findPokemonByRegion = (region) => {
    const Region = [
        "kanto",
        "johto",
        "hoenn",
        "sinnoh",
        "unova",
        "kalos",
        "alola",
        "hisui",
        "galar",
        "paldea",
    ];
    if (typeof region !== "string" || !Region.includes(region.toLowerCase())) {
        throw new Error("Invalid Region Name. Please Provide a correct Region Name.");
    }
    const req = (0, helper_tools_1.capitalize)(region);
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return pokemon.region === req;
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon Found from ${region}!`);
    return res;
};
exports.findPokemonByRegion = findPokemonByRegion;
/**
 * ?findPokemonByType - Find all Pokemon with certain Type.
 * @param {string} type - name of Type (e.g., 'grass', 'fire').
 * @returns {PokemonModel[]} - array of Pokemon object with matching Type.
 */
const findPokemonByType = (type) => {
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
    if (typeof type !== "string" || !valid.includes(type.toLowerCase())) {
        throw new Error("Invalid Type! Please provide a correct Type of Pokemon");
    }
    const req = (0, helper_tools_1.capitalize)(type);
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return pokemon.types.includes(req);
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon with ${type} type!`);
    return res;
};
exports.findPokemonByType = findPokemonByType;
/**
 * ?findPokemonByTypes - Find all Pokemon with certain Types Combination. Order of type doesn't matter.
 * @param {string[]} types - Array of Types (e.g., ['grass', 'poison'], ['fire', 'water']).
 * @returns {PokemonModel[]} - Array of Pokemon objects with matching type combination.
 */
const findPokemonByTypes = (types) => {
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
    if (!Array.isArray(types) ||
        !types.every((type) => valid.includes(type.toLowerCase()))) {
        throw new Error("Invalid Type of Pokemon! Please provide a correct Type of Pokemon");
    }
    const req = types.map((type) => (0, helper_tools_1.capitalize)(type));
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return req.every((type) => pokemon.types.includes(type));
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon with combination type of ${types.join(", ")}!`);
    return res;
};
exports.findPokemonByTypes = findPokemonByTypes;
/**
 * ?findPokemonByAbility - Find all Pokemon with certain Ability.
 * @param {string} ability - name of Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {PokemonModel[]} array of Pokemon objects with the matching Ability.
 */
const findPokemonByAbility = (ability) => {
    if (typeof ability !== "string") {
        throw new Error("Invalid Ability Name. Please provide a correct Ability Name.");
    }
    const req = (0, helper_tools_1.capitalize)(ability);
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return (pokemon.abilities.normal.includes(req) || pokemon.abilities.hidden === req);
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon with ${ability} is found!`);
    return res;
};
exports.findPokemonByAbility = findPokemonByAbility;
/**
 * ?findPokemonByHiddenAbility - Find all Pokemon with certain Hidden Ability.
 * @param {string} ability - name of Hidden Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {PokemonModel[]} array of Pokemon objects with the matching Hidden Ability.
 */
const findPokemonByHiddenAbility = (ability) => {
    if (typeof ability !== "string") {
        throw new Error("Invalid Ability Name. Please provide a correct Ability Name.");
    }
    const req = (0, helper_tools_1.capitalize)(ability);
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return pokemon.abilities.hidden === req;
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon have ${ability} as Hidden Ability!`);
    return res;
};
exports.findPokemonByHiddenAbility = findPokemonByHiddenAbility;
/**
 * ?findPokemonByNormalAbility - Find all Pokemon with certain Normal Ability.
 * @param {string} ability - name of Hidden Ability (e.g., 'adaptability', 'Air Lock').
 * @returns {PokemonModel[]} array of Pokemon objects with the matching Normal Ability.
 */
const findPokemonByNormalAbility = (ability) => {
    if (typeof ability !== "string") {
        throw new Error("Invalid Ability Name. Please provide a correct Ability Name.");
    }
    const req = (0, helper_tools_1.capitalize)(ability);
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return pokemon.abilities.normal.includes(req);
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon have ${ability} as Normal Ability!`);
    return res;
};
exports.findPokemonByNormalAbility = findPokemonByNormalAbility;
/**
 * ?findPokemonByBaseStat - Find all Pokemon that have the specified base stat.
 * @param {number | string} stat - Base stat of the Pokemon to search for.
 * @param {string} statType - Type of base stat ('hp', 'atk', 'def', 'spa', 'spd', 'speed').
 * @return {PokemonModel[]} - Array of Pokemon objects with matching base stat.
 */
const findPokemonByBaseStat = (stat, statType) => {
    const valid = ["hp", "atk", "def", "spa", "spd", "speed"];
    if ((typeof stat !== "string" && typeof stat !== "number") ||
        (typeof stat === "string" && isNaN(parseInt(stat)))) {
        throw new Error("Invalid Stat Format! Stat should be a number or a string.");
    }
    if (typeof statType !== "string" || !valid.includes(statType.toLowerCase())) {
        throw new Error("Invalid Stat Type! StatType should be one of 'hp', 'atk', 'def', 'spa', 'spd', 'speed'.");
    }
    const req = stat.toString();
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return pokemon.stats[statType] === req;
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon found with ${statType} base stat of ${stat}.`);
    return res;
};
exports.findPokemonByBaseStat = findPokemonByBaseStat;
/**
 * ?findPokemonByEggGroup - Find all Pokemon with certain Egg Group
 * @param {string} eggGroup -  Egg Group of the Pokemon (e.g., 'monster', 'grass', 'dragon', 'field').
 * @returns {PokemonModel[]} - Array of Pokemon object with matching Egg Group.
 */
const findPokemonByEggGroup = (eggGroup) => {
    const valid = [
        "monster",
        "human-like",
        "water 1",
        "water 3",
        "bug",
        "mineral",
        "flying",
        "amorphous",
        "field",
        "water 2",
        "fairy",
        "ditto",
        "grass",
        "dragon",
        "no eggs discovered",
        "gender unknown",
    ];
    if (typeof eggGroup !== "string" || !valid.includes(eggGroup.toLowerCase())) {
        throw new Error("Invalid Egg Group! Egg Group should be one of 'monster', 'human-like', 'water 1', 'water 3', 'bug', 'mineral', 'flying', 'amorphous', 'field', 'water 2', 'fairy', 'ditto', 'grass', 'dragon' or 'no eggs discovered'!");
    }
    const req = (0, helper_tools_1.capitalize)(eggGroup);
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return pokemon.eggGroups.includes(req);
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon from ${eggGroup} Egg Groups!`);
    return res;
};
exports.findPokemonByEggGroup = findPokemonByEggGroup;
/**
 * ?findPokemonByGenderRatio - Find all Pokemon that have the specified Gender Ratio.
 * @param {number} ratio - Gender Ratio of the Pokemon (0, 12.5, 25, 50, 75, 87.5, 100).
 * @param {string} gender - Gender of the Pokemon ('male' or 'female').
 * @returns {PokemonModel[]} array of Pokemon objects with matching Ratio.
 */
const findPokemonByGenderRatio = (ratio, gender) => {
    const valid = ["male", "female"];
    if (typeof ratio !== "number") {
        throw new Error("Invalid Gender Ratio Format! Gender Ratio should be a number!");
    }
    if (typeof gender !== "string" || !valid.includes(gender.toLowerCase())) {
        throw new Error("Invalid Gender of Pokemon! Gender should be 'male' or 'female'!");
    }
    // change male into 0 and female into 1
    const type = gender.toLowerCase() === "male" ? 0 : 1;
    const res = pokemon_model_1.Pokemon.filter((pokemon) => {
        return pokemon.genderRatios[type] === ratio;
    });
    (0, helper_tools_1.throwErrorIfEmpty)(res, `No Pokemon with ${gender} ratio of ${ratio}!`);
    return res;
};
exports.findPokemonByGenderRatio = findPokemonByGenderRatio;
/**
 * @returns - all pokemon object you can have.. careful there are more or less around 890 object. big object in fact. use the page one if you worried..
 */
const getAllPokemon = () => {
    return pokemon_model_1.Pokemon.slice(1);
};
exports.getAllPokemon = getAllPokemon;
/**
 * Retrieve 30 Pokemon at once.
 * @param pagesNumber - The page number to retrieve.
 * @returns - return 30 Pokemons Objects
 */
const POKEMON_PER_PAGES = 30;
const getThirtyPokemon = (pagesNumber) => {
    const pokemon = pokemon_model_1.Pokemon.slice(1);
    const startIndex = (pagesNumber - 1) * POKEMON_PER_PAGES;
    const endIndex = startIndex + POKEMON_PER_PAGES;
    return pokemon.slice(startIndex, endIndex);
};
exports.getThirtyPokemon = getThirtyPokemon;
/**
 * Retrieve Pokemon objects with custom items per page. Handle the calculations by yourself.
 * @param pageNumber - The page number to retrieve.
 * @param itemsPerPage - The number of items per page.
 * @returns - An array of PokemonModel objects based on the specified page and items per page.
 */
const getCustomPokemonPerPage = (pageNumber, itemsPerPage) => {
    const pokemon = pokemon_model_1.Pokemon.slice(1);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pokemon.slice(startIndex, endIndex);
};
exports.getCustomPokemonPerPage = getCustomPokemonPerPage;
/**
 * todo - Create Advance Filter (Filter after Filter);
 * @param {PokemonModel[]} - Array of Filtered Pokemon;
 * @param {field} - field of second filter;
 * @returns - new Array of Pokemon that get more filter;
 */
