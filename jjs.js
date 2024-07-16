function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

let numbers = [7, 1, 3,  5, 8];
console.log(findMax(numbers)); 

let emptyArray = [];
console.log(findMax(emptyArray));
