// Basic types
let n: number = 5;
let s: string = "Hello";
let b: boolean = true;

let a: any = undefined; // any type

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [ 1, true, "Hello"]

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
let people: [number, string][]; // Tuple Array

people = [[1, 'John'], [1, 'Joe'], [1, 'hamo']]

// Union
let id: string | number = 1
    id = 'Hello'

// Enum
enum Direction1 {
    First = 1,
    Second,
    Third,
    Fourth
}

enum Direction2 {
    First = "First",
    Second = "Second",
    Third = "Third",
    Fourth = "Fourth"
}


