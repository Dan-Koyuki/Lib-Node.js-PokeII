"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EggGroup = exports.PokemonType = exports.Flavor = exports.Stat = void 0;
var Stat;
(function (Stat) {
    Stat["ATK"] = "atk";
    Stat["DEF"] = "def";
    Stat["SPA"] = "spa";
    Stat["SPD"] = "spd";
    Stat["SPEED"] = "speed";
    Stat["NONE"] = "none";
})(Stat || (exports.Stat = Stat = {}));
var Flavor;
(function (Flavor) {
    Flavor["SPICY"] = "spicy";
    Flavor["DRY"] = "dry";
    Flavor["BITTER"] = "bitter";
    Flavor["SOUR"] = "sour";
    Flavor["SWEET"] = "sweet";
    Flavor["NONE"] = "none";
})(Flavor || (exports.Flavor = Flavor = {}));
var PokemonType;
(function (PokemonType) {
    PokemonType["NORMAL"] = "Normal";
    PokemonType["GHOST"] = "Ghost";
    PokemonType["ROCK"] = "Rock";
    PokemonType["STEEL"] = "Steel";
    PokemonType["FIRE"] = "Fire";
    PokemonType["WATER"] = "Water";
    PokemonType["GRASS"] = "Grass";
    PokemonType["ELECTRIC"] = "Electric";
    PokemonType["ICE"] = "Ice";
    PokemonType["GROUND"] = "Ground";
    PokemonType["FLYING"] = "Flying";
    PokemonType["FIGHTING"] = "Fighting";
    PokemonType["FAIRY"] = "Fairy";
    PokemonType["DRAGON"] = "Dragon";
    PokemonType["BUG"] = "Bug";
    PokemonType["DARK"] = "Dark";
    PokemonType["PSYCHIC"] = "Psychic";
    PokemonType["POISON"] = "Poison";
    PokemonType["UNKNOWN"] = "???";
})(PokemonType || (exports.PokemonType = PokemonType = {}));
var EggGroup;
(function (EggGroup) {
    EggGroup["MONSTER"] = "Monster";
    EggGroup["HUMANLIKE"] = "Human-Like";
    EggGroup["WATER1"] = "Water 1";
    EggGroup["WATER2"] = "Water 2";
    EggGroup["WATER3"] = "Water 3";
    EggGroup["BUG"] = "Bug";
    EggGroup["MINERAL"] = "Mineral";
    EggGroup["FLYING"] = "Flying";
    EggGroup["AMORPHOUS"] = "Amorphous";
    EggGroup["FIELD"] = "Field";
    EggGroup["FAIRY"] = "Fairy";
    EggGroup["DITTO"] = "Ditto";
    EggGroup["GRASS"] = "Grass";
    EggGroup["DRAGON"] = "Dragon";
    EggGroup["UNDISCOVERED"] = "No Eggs Discovered";
    EggGroup["UNKNOWN"] = "Gender Unknown";
})(EggGroup || (exports.EggGroup = EggGroup = {}));
