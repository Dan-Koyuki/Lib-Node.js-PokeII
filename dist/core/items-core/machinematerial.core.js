"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMaterialByName = exports.getAllMaterial = void 0;
const items_model_1 = require("../../models/items-model/items.model");
const machinematerial_model_1 = require("../../models/items-model/machinematerial.model");
const getAllMaterial = () => {
    return machinematerial_model_1.MachineMaterial;
};
exports.getAllMaterial = getAllMaterial;
const findMaterialByName = (name) => {
    const res = machinematerial_model_1.MachineMaterial.find((material) => material.name.toLowerCase() === name.toLowerCase()) || items_model_1.MaterialError;
    return res;
};
exports.findMaterialByName = findMaterialByName;
