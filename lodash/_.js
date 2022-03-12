const _ = {
    clamp (number, lowerBound, upperBound) {
        const clampLower = Math.max(number, lowerBound);
        const clampValue = Math.min(clampLower, upperBound);

        return clampValue;
    },
    inRange (number, startValue, endValue) {
        if (endValue === undefined){
            endValue = startValue;
            startValue = 0;
        }

        if (startValue > endValue) {
            let temp = endValue;
            endValue = startValue;
            startValue = temp;
        }

        const isInRange = (number >= startValue && number < endValue) ? true : false

        return isInRange;

    },
    words (string) {
        const words = string.split(' ');

        return words;
    },
    pad (string, targetLength) {
        if (targetLength <= string.length) {
            return string;
        }

        const beginPad = Math.floor((targetLength - string.length) / 2);
        const endPad = (targetLength - string.length - beginPad);

        const paddedString = `${' '.repeat(beginPad)}${string}${' '.repeat(endPad)}`;

        return paddedString;
    },
    has (object, key) {
        let keyValue;

        if (key in object){
            keyValue = object.key
        }

        if (keyValue != undefined) {
            return true;
        }
        else {
            return false;
        }
    },
    invert (object) {
        const invertedObject = {};

        for (let key in object) {
            const originalValue = object[key];

            invertedObject[originalValue] = key;

        }

        return invertedObject
    },
    findKey (object, predicate) {
        for (let key in object) {
            const value = object[key];

            const predicateReturnValue = predicate(value);

            if (predicateReturnValue) {
                return key
            }

             
        }
        return undefined;
    },
    drop (array, n) {
        let newArray = []

        if (n === undefined) {
            n = 1;
        }
       
        newArray = array.slice(n);
                   
        return newArray;
    },
    dropWhile (array, predicate) {
        let dropNumber = array.findIndex((element, index) => {return !predicate(element, index, array)});

        let droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },
    chunk (array, size) {
        if (size === undefined) {
            size = 1;
        }

        let arrayChunks = [];

        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);

            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};




// Do not write or modify code below this line.
module.exports = _;