import { Flavor, Stat } from "./helper.enum";
export interface NatureModel {
    id: string;
    name: string;
    increase: Stat;
    decrease: Stat;
    like: Flavor;
    dislike: Flavor;
}
export declare const Natures: NatureModel[];
