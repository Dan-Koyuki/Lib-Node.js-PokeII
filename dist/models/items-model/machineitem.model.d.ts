import { ItemsModel } from "./items.model";
export interface TMModel extends ItemsModel {
    moves: string;
    recipe: string[];
}
export declare const TM: TMModel[];
