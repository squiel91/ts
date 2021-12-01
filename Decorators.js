"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(constructor) {
    console.log('Logging ...');
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = 'Eze';
        console.log('Creating object ...');
    }
};
Person = __decorate([
    Logger
], Person);
new Person();
function LoggerFactory(logString) {
    return function LoggerFactory(constructor) {
        console.log('Logging ... ');
        console.log(logString + constructor);
    };
}
let Person1 = class Person1 {
    constructor() {
        this.name = 'Eze';
        console.log('Creating object ...');
    }
};
Person1 = __decorate([
    LoggerFactory('Logging PERSON')
], Person1);
exports.default = 0;
//# sourceMappingURL=Decorators.js.map