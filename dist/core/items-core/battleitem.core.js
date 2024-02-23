"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBattleItem = exports.findBattleItemByName = void 0;
const battleitem_model_1 = require("../../models/items-model/battleitem.model");
const items_model_1 = require("../../models/items-model/items.model");
const helper_tools_1 = require("../tools/helper.tools");
/**
 *
 * @param {string} name - battle item name (X Attack, X Defense, X Sp. Attack, X Sp. Defense, X Speed, X Accuracy, Dire Hit, Guard Spec.)
 * @returns - corresponding BattleItem object.
 */
const findBattleItemByName = (name) => {
    if (typeof name !== 'string') {
        throw new Error("Invalid Battle Item name Format!");
    }
    const req = (0, helper_tools_1.capitalize)(name);
    const res = battleitem_model_1.BattleItem.find((battleitem) => battleitem.name === req) || items_model_1.BattleItemError;
    return res;
};
exports.findBattleItemByName = findBattleItemByName;
const getAllBattleItem = () => {
    return battleitem_model_1.BattleItem;
};
exports.getAllBattleItem = getAllBattleItem;
