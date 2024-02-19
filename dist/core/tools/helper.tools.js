"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwErrorIfEmpty = exports.capitalize = void 0;
const capitalize = (input) => {
    // Split the string into an array of words
    let words = input.split(" ");
    // Capitalize the first letter of each word
    let capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the words back into a string
    let resultString = capitalizedWords.join(" ");
    return resultString;
};
exports.capitalize = capitalize;
const throwErrorIfEmpty = (result, message) => {
    if (!result || result.length === 0) {
        throw new Error(message);
    }
};
exports.throwErrorIfEmpty = throwErrorIfEmpty;
