import { BagCategory } from "../helper.enum";
import { BattleItemModel } from "./battleitem.model";
import { TMModel } from "./machineitem.model";
import { MachineMaterialModel } from "./machinematerial.model";
import { PokeBallModel } from "./pokeballitem.model";
export interface ItemsModel {
    id: string;
    name: string;
    price: number;
    description: string;
    category: BagCategory;
    held: boolean;
}
export declare const PokeballError: PokeBallModel;
export declare const TMError: TMModel;
export declare const BattleItemError: BattleItemModel;
export declare const MaterialError: MachineMaterialModel;
