"use strict";

function isEmpty(object) {
    let count = 0;
    for(let prop in object) {
        count++;
    }
    return count === 0;
}

const emptyObj = {};
const nonEmptyObj = {
    name: "John"
};
console.log(isEmpty(emptyObj));
console.log(isEmpty(nonEmptyObj));