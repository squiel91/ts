"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = [];
const b = [];
a.concat('look, its safe!');
const p = new Promise((accept, reject) => {
    setTimeout(() => {
        accept('Returned!');
    });
});
p.then(isAString => {
    isAString.concat('look, its safe!');
});
exports.default = 0;
//# sourceMappingURL=Generics.js.map