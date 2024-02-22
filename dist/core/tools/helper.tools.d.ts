import { TMModel } from "../../models/items-model/machineitem.model";
import { PokeBallModel } from "../../models/items-model/pokeballitem.model";
import { NatureModel } from "../../models/nature.model";
import { PokemonModel } from "../../models/pokemons-model/pokemons.model";
import { TypeModel } from "../../models/type.model";
export declare const capitalize: (input: String) => string;
export declare const throwErrorIfEmpty: (result: (PokemonModel | PokeBallModel | TMModel | NatureModel | TypeModel)[] | any, message: string) => void;
