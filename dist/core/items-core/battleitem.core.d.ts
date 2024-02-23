import { BattleItemModel } from "../../models/items-model/battleitem.model";
/**
 *
 * @param {string} name - battle item name (X Attack, X Defense, X Sp. Attack, X Sp. Defense, X Speed, X Accuracy, Dire Hit, Guard Spec.)
 * @returns - corresponding BattleItem object.
 */
export declare const findBattleItemByName: (name: string) => BattleItemModel;
export declare const getAllBattleItem: () => BattleItemModel[];
