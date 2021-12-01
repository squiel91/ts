"use strict";
class Test {
    constructor(position) {
        this.position = position;
    }
    move(position) {
        this.position = position;
        return position;
    }
}
class Person {
    constructor(name, position, age) {
        this.name = name;
        this.position = position;
        this.age = age;
    }
    greet(to) {
        console.log(`Hello ${to}, I am ${this.name}, i am ${this.age}`);
    }
    move(position) {
        this.position = position;
        return position;
    }
}
const lucas = new Person('Lucas', [32, 43]);
lucas.greet('Eze');
let add1 = (a, b) => a + b;
let add2 = (a, b) => a + b;
//# sourceMappingURL=interfaces.js.map