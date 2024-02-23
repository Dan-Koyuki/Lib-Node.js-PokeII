"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleItem = void 0;
const helper_enum_1 = require("../helper.enum");
;
exports.BattleItem = [
    {
        id: "01",
        name: "X Attack",
        description: "An item that sharply boosts the Attack stat of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
        price: 1000,
        sell_price: 250,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.ATK,
            multiplier: 2,
        },
    },
    {
        id: "02",
        name: "X Defense",
        description: "An item that sharply boosts the Defense stat of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
        price: 2000,
        sell_price: 500,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.DEF,
            multiplier: 2,
        },
    },
    {
        id: "03",
        name: "X Sp. Attack",
        description: "An item that sharply boosts the Sp. Atk stat of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
        price: 1000,
        sell_price: 250,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.SPA,
            multiplier: 2,
        },
    },
    {
        id: "04",
        name: "X Sp. Defense",
        description: "An item that sharply boosts the Sp. Def stat of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
        price: 3000,
        sell_price: 500,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.SPD,
            multiplier: 2,
        },
    },
    {
        id: "05",
        name: "X Speed",
        description: "An item that sharply boosts the Speed stat of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
        price: 1000,
        sell_price: 250,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.SPEED,
            multiplier: 2,
        },
    },
    {
        id: "06",
        name: "X Accuracy",
        description: "An item that sharply boosts the Accuracy stat of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
        price: 1000,
        sell_price: 250,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.ACC,
            multiplier: 2,
        },
    },
    {
        id: "07",
        name: "Dire Hit",
        description: "An item that can be used once to sharply boost the critical-hit ratio of a Pokémon in battle. This effect disappears if the Pokémon leaves the battle.",
        price: 1000,
        sell_price: 250,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.CRIT,
            multiplier: 2,
        },
    },
    {
        id: "08",
        name: "Guard Spec.",
        description: "An item that prevents Pokémon on your side from having their stats lowered in battle for five turns.",
        price: 1500,
        sell_price: 350,
        category: helper_enum_1.BagCategory.BATTLEITEM,
        held: true,
        effect: {
            statFlag: helper_enum_1.Stat.NONE,
            multiplier: 0,
        },
    }
];
