"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('arguments of different types');
}
const b = {
    a() { }
};
function foo(x) {
    if ('a' in x) {
        x.a();
    }
    if ('b' in x) {
        x.b();
        x.bb();
    }
}
class C {
    x() { }
    c() { }
}
class D {
    x() { }
    d() { }
}
function fooo(x) {
    x.x();
    if (x instanceof D) {
        x.d();
    }
}
function tellSpeed(animal) {
    let speed;
    if (animal.kind === 'bird') {
        speed = animal.flyingSpeed;
    }
    else {
        speed = animal.runningSpeed;
    }
    console.log(`My speed is ${speed}`);
}
exports.default = 0;
//# sourceMappingURL=typeguards.js.map