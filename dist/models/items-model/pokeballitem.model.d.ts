import { PokeBallFlag } from "../helper.enum";
export interface PokeBallModel {
    id: string;
    name: string;
    gen: string;
    price: number;
    sell_price: number;
    catch_rate: {
        normal: number;
        condition?: ConditionPokeBall[];
    };
    description: string;
    notes?: string;
}
export interface ConditionPokeBall {
    conditionFlag: PokeBallFlag;
    rate: number;
}
export declare const PokeBall: PokeBallModel[];
