import { Stat } from "../helper.enum";
import { ItemsModel } from "./items.model";
export interface BattleItemModel extends ItemsModel {
    sell_price: number;
    effect: BattleItemEffect;
}
interface BattleItemEffect {
    statFlag: Stat;
    multiplier: number;
}
export declare const BattleItem: BattleItemModel[];
export {};
