"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeBall = void 0;
const helper_enum_1 = require("../helper.enum");
exports.PokeBall = [
    {
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
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "001",
        name: "Poke Ball",
        gen: "I",
        price: 200,
        sell_price: 50,
        catch_rate: {
            normal: 1,
        },
        description: "1x catch rate.",
        notes: "Must be in the player's Bag with an empty space in the party to obtain a Shedinja when Nincada evolves from Generation IV onwards.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "002",
        name: "Great Ball",
        gen: "I",
        price: 600,
        sell_price: 150,
        catch_rate: {
            normal: 1.5,
        },
        description: "1.5x catch rate than normal PokeBall.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "003",
        name: "Ultra Ball",
        gen: "I",
        price: 800,
        sell_price: 200,
        catch_rate: {
            normal: 2,
        },
        description: "2x catch rate than normal PokeBall.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "004",
        name: "Master Ball",
        gen: "I",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 255,
        },
        description: "255x (guaranteed capture)",
        notes: "The only Poké Ball other than the Beast Ball that does not have a 0.1x catch modifier when used on an Ultra Beast.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "005",
        name: "Safari Ball",
        gen: "I",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 0,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.SAFARI,
                    rate: 1.5,
                },
            ],
        },
        description: "can only be used at Safari Park.",
        notes: "Prior to Generation VIII, it had a 1.5x modifier but could not be obtained in normal gameplay, and was only usable within Safari Zones.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "006",
        name: "Fast Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.SPEED,
                    rate: 4,
                },
            ],
        },
        description: "4x if used on a Pokémon with a base Speed of at least 100. 1x otherwise",
        notes: "In Generation II, it was intended to have a 4x catch modifier for Pokémon that can flee, but it only does for three of them: Magnemite, Grimer and Tangela.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "007",
        name: "Level Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.LEVEL1,
                    rate: 2,
                },
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.LEVEL2,
                    rate: 4,
                },
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.LEVEL3,
                    rate: 8,
                },
            ],
        },
        description: "1x if the player's Pokémon is the same level as or a lower level than the wild Pokémon. 2x if the player's Pokémon is at a higher level than the wild Pokémon but less than double it. 4x if the player's Pokémon is more than double but less than four times the level of the wild Pokémon. 8x if the player's Pokémon is of a level four times or more than that of the wild Pokémon",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "008",
        name: "Lure Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.FISHING,
                    rate: 4,
                },
            ],
        },
        description: "4x if used on a Pokémon encountered while fishing. 1x otherwise",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "009",
        name: "Heavy Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 0.1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.WEIGHT1,
                    rate: -20,
                },
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.WEIGHT2,
                    rate: 0,
                },
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.WEIGHT3,
                    rate: 20,
                },
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.WEIGHT4,
                    rate: 30,
                },
            ],
        },
        description: "-20 if used on a Pokémon weighing 220.2lbs. (99.9kg) or less. ±0 if used on a Pokémon weighing 220.5lbs. (100.0kg) - 440.7lbs. (199.9kg). +20 if used on a Pokémon weighing 440.9lbs. (200.0kg) - 661.2lbs. (299.9kg). +30 if used on a Pokémon weighing 661.4lbs. (300.0kg) or more",
        notes: "In Pokémon Sun and Moon only, a Heavy Ball will always fail to catch a Pokémon whose weight is less than 220.46lbs (100.0kg) and whose catch rate is less than or equal to 20. This is because the game will set the catch rate to 0 when the catch rate becomes negative due to the -20 modifier that is applied.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "010",
        name: "Love Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.SPECIES,
                    rate: 8,
                },
            ],
        },
        description: "8x if used on a Pokémon of the same species but opposite gender of the player's Pokémon. 1x otherwise",
        notes: "In Generation II, it has an 8x catch modifier if both Pokémon are the same species and gender.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "011",
        name: "Friend Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
        },
        description: "raise friendship of caught Pokemon.",
        notes: "Sets caught Pokémon's friendship to 200Gen II-VII, or 150Gen VIII+",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "012",
        name: "Moon Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.MOONEVO,
                    rate: 4,
                },
            ],
        },
        description: "4x if used on a Pokémon that belongs to an evolutionary family which includes a Pokémon that evolves by using a Moon Stone. 1x otherwise",
        notes: "In Generation II, it always has a 1x catch modifier due to a programming error.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "013",
        name: "Sport Ball",
        gen: "II",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
        },
        description: "1x",
        notes: "Prior to Generation VIII, it had a 1.5x modifier but could not be obtained in normal gameplay, and was only usable during the Bug-Catching Contest.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "014",
        name: "Net Ball",
        gen: "III",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.BUG,
                    rate: 3.5,
                },
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.WATER,
                    rate: 3.5,
                },
            ],
        },
        description: "3.5x if used on a Water or Bug-type Pokémon. 1x otherwise",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "015",
        name: "Dive Ball",
        gen: "III",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.DIVING,
                    rate: 3.5,
                },
            ],
        },
        description: "3.5x if used on a water-dwelling Pokémon. 1x otherwise",
        notes: "In Generation III, it only had an increased catch rate underwater.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "016",
        name: "Nest Ball",
        gen: "III",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.LEVEL4,
                    rate: (41 - 29) / 10,
                },
            ],
        },
        description: "((41 - Pokémon's level) ÷ 10)x if Pokémon's level is between 1 and 29. 1x otherwise",
        notes: "If used as game object data, rate for condition need to be manually change.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "017",
        name: "Repeat Ball",
        gen: "III",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.POKEDEX,
                    rate: 3.5,
                },
            ],
        },
        description: "3.5x if used on a Pokémon that is registered in the player's Pokédex as caught. 1x otherwise",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "018",
        name: "Timer Ball",
        gen: "III",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 0.1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.TURN,
                    rate: 1 + (0 * 1229) / 4096,
                },
            ],
        },
        description: "(1 + number of turns passed in battle * 1229/4096)x, maximum 4x at 10 turns",
        notes: "If used as game object data, rate for condition need to be manually change.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "019",
        name: "Luxury Ball",
        gen: "III",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
        },
        description: "1x",
        notes: "Doubles the rate at which the contained Pokémon's friendship increases.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "020",
        name: "Premier Ball",
        gen: "III",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
        },
        description: "Just Normal Pokeball but a bit fancy.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "021",
        name: "Dusk Ball",
        gen: "IV",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.CAVE,
                    rate: 3,
                },
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.NIGHT,
                    rate: 3,
                },
            ],
        },
        description: "3x if used in a cave or at night. 1x otherwise",
        notes: "",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "022",
        name: "Heal Ball",
        gen: "IV",
        price: 300,
        sell_price: 100,
        catch_rate: {
            normal: 1,
        },
        description: "Pokeball but heal.",
        notes: "Fully restores a caught Pokémon's HP and PP and removes their status conditions.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "023",
        name: "Quick Ball",
        gen: "IV",
        price: 1000,
        sell_price: 300,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.TURN,
                    rate: 5,
                },
            ],
        },
        description: "5x if used on the first turn of a battle. 1x otherwise",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "024",
        name: "Cherish Ball",
        gen: "IV",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
        },
        description: "1x",
        notes: "Unobtainable by the player, but used for various event Pokémon.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "025",
        name: "Park Ball",
        gen: "IV",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.PALPARK,
                    rate: 255,
                },
            ],
        },
        description: "255x (guaranteed capture if used in Pal Park). 1x otherwise",
        notes: "Unobtainable by the player, but used in Pal Park.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "026",
        name: "Dream Ball",
        gen: "V",
        price: 500,
        sell_price: 150,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.SLEEP,
                    rate: 4,
                },
            ],
        },
        description: "4x if used on a sleeping Pokémon. 1x otherwise",
        notes: "Used only in Entree Forest prior to Generation VIII.. Catch rate modifier 255x (guaranteed capture) in Generation V.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "027",
        name: "Beast Ball",
        gen: "VII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 0.1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.UB,
                    rate: 5,
                },
            ],
        },
        description: "5x if used on an Ultra Beast. 0.1x otherwise",
        notes: "If any other Poké Ball (except the Master Ball) is used on an Ultra Beast, it has a 0.1x catch modifier.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "028",
        name: "Strange Ball",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 0.75,
        },
        description: "0.75x",
        notes: "Unobtainable by the player. Pokémon in Pokémon Legends: Arceus that were transferred from other games via Pokémon HOME, as well as Pokémon from Legends: Arceus in Pokémon Brilliant Diamond and Shining Pearl or Pokémon Scarlet and Violet will be displayed in this ball.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "029",
        name: "Poke Ball (Hisui)",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 0.75,
        },
        description: "0.75x",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "030",
        name: "Great Ball (Hisui)",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1.5,
        },
        description: "1.5x",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "031",
        name: "Ultra Ball (Hisui)",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 2.25,
        },
        description: "2.25x",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "032",
        name: "Feather Ball",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.BOOSTED,
                    rate: 1.25,
                },
            ],
        },
        description: "1x. 1.25x when boosted",
        notes: "Can be thrown further than a regular Poké Ball. Is more effective for catching Pokémon that fly high in the air.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "033",
        name: "Wing Ball",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1.5,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.BOOSTED,
                    rate: 1.75,
                },
            ],
        },
        description: "1.5x. 1.75x when boosted",
        notes: "Can be thrown further than a Feather Ball. Is more effective for catching Pokémon that fly high in the air.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "034",
        name: "Jet Ball",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 2,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.BOOSTED,
                    rate: 2.75,
                },
            ],
        },
        description: "2x. 2.75x when boosted",
        notes: "Can be thrown further than a Wing Ball. Is more effective for catching Pokémon that fly high in the air.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "035",
        name: "Heavy Ball (Hisui)",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.BOOSTED,
                    rate: 1.25,
                },
            ],
        },
        description: "1x. 1.25x when boosted",
        notes: "Doesn't fly far, but is more effective if the Pokémon hasn't noticed the player.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "036",
        name: "Leaden Ball",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 1.75,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.BOOSTED,
                    rate: 2,
                },
            ],
        },
        description: "1.75x. 2x when boosted",
        notes: "Upgraded version of the Heavy Ball. Doesn't fly far, but is more effective if the Pokémon hasn't noticed the player.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "037",
        name: "Gigaton Ball",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 2.5,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.BOOSTED,
                    rate: 2.75,
                },
            ],
        },
        description: "2.5x. 2.75x when boosted",
        notes: "Upgraded version of the Leaden Ball. Doesn't fly far, but is more effective if the Pokémon hasn't noticed the player.",
        category: helper_enum_1.BagCategory.BALLS
    },
    {
        id: "038",
        name: "Origin Ball",
        gen: "VIII",
        price: 0,
        sell_price: 0,
        catch_rate: {
            normal: 0,
            condition: [
                {
                    conditionFlag: helper_enum_1.PokeBallFlag.ORIGIN,
                    rate: 255,
                },
            ],
        },
        description: "N/A",
        notes: "Automatically catches Origin Forme Dialga or Palkia at the end of the main story in Pokémon Legends: Arceus.",
        category: helper_enum_1.BagCategory.BALLS
    },
];
