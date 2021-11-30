"use strict";
const a = document.getElementById('a');
const b = document.getElementById('b');
const calc = document.getElementById('calc');
function add(a, b, showResult) {
    if (showResult) {
        console.log(a + b);
    }
    else {
        return a + b;
    }
}
let c;
let d = 4;
let e = 5;
let p;
p = 5;
p = true;
console.log(p);
const person = {
    name: 'Eze',
    age: 30
};
let hobbies = ['football', 'taeckwonbd'];
hobbies[0].toUpperCase();
const tuple = [1, 'hello'];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
let g = Role.ADMIN;
function combine(a, b, showResult) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    return 3;
}
let resultConversion;
function hello(h, t) {
}
let y;
let j;
y = hello;
function withCallback(h, cb) {
    cb(h);
    return h;
}
withCallback(4, (a) => a);
let userInput;
let userName;
userInput = 5;
userInput = 'dsds';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError() {
    throw { message: 'Error', errorCode: 500 };
}
calc.addEventListener('click', () => {
    console.log(add(1, 2, true));
    console.log(add(+'1', +'2', false));
});
console.log(add(1, 2, true));
//# sourceMappingURL=types.js.map