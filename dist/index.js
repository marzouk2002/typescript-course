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
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    // these props can be protected, public or private
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} registered`;
    }
}
const john = new Person(1, 'john', 25);
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employee(3, 'ddd', 40, 'Developer');
