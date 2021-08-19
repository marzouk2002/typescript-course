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

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
interface PersonInterface {
    id: number,
    name: string,
    age: number,
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string
    age: number
    // these props can be protected, public or private

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    register() {
        return `${this.name} registered`
    }
}

const john = new Person(1, 'john', 25)

class Employee extends Person {
    position: string

    constructor(id: number, name: string, age: number, position: string) {
        super(id, name, age)
        this.position= position
    }
}

const emp = new Employee(3, 'ddd', 40, 'Developer')