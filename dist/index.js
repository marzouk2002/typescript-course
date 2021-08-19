"use strict";
// Basic types
let n = 5;
let s = "Hello";
let b = true;
let a = undefined; // any type
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, 'Brad', true];
let people; // Tuple Array
people = [[1, 'John'], [1, 'Joe'], [1, 'hamo']];
// Union
let id = 1;
id = 'Hello';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["First"] = 1] = "First";
    Direction1[Direction1["Second"] = 2] = "Second";
    Direction1[Direction1["Third"] = 3] = "Third";
    Direction1[Direction1["Fourth"] = 4] = "Fourth";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["First"] = "First";
    Direction2["Second"] = "Second";
    Direction2["Third"] = "Third";
    Direction2["Fourth"] = "Fourth";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
