import { BagCategory } from "../helper.enum";
export interface TMModel {
    id: string;
    name: string;
    moves: string;
    description: string;
    price: number;
    recipe: string[];
    category: BagCategory.MACHINES;
}
export declare const TM: TMModel[];
