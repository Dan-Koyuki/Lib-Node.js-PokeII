import { PokeBallFlag } from "../helper.enum";
import { ItemsModel } from "./items.model";
export interface PokeBallModel extends ItemsModel {
    gen: string;
    sell_price: number;
    catch_rate: {
        normal: number;
        condition?: ConditionPokeBall[];
    };
    notes?: string;
}
export interface ConditionPokeBall {
    conditionFlag: PokeBallFlag;
    rate: number;
}
export declare const PokeBall: PokeBallModel[];
