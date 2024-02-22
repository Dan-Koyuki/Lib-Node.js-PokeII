import { BagCategory } from "../helper.enum";
import { TMModel } from "./machineitem.model";
import { PokeBallModel } from "./pokeballitem.model";
export interface ItemsModel {
    id: string;
    name: string;
    price: number;
    description: string;
    category: BagCategory;
}
export declare const PokeballError: PokeBallModel;
export declare const TMError: TMModel;
