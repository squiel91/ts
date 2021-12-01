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
const c = combine(1, 1);
const d = combine('a', 'b');
d.split(' ');
function combineOptional(a, b) {
    if (!b)
        return a;
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('arguments of different types');
}
exports.default = 0;
//# sourceMappingURL=functionOverloads.js.map