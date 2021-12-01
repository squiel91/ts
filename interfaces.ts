interface Named {
  readonly name: string // cannot asign private, protected, or public (lame)
  age?: number // 
}

interface Greetable extends Named { // because it is TS, i wcan extend more than one interface

  greet(name: string): void;
}

type Position = [number, number]

interface Movable {
  position: Position

  move(position: Position): Position;
}

class Test implements Movable {
  constructor (public position: Position) {

  }


  move (position: Position) {
    this.position = position
    return position
  }
}

class Person implements Greetable, Movable {
  
  constructor(public name: string, public position: Position, public age?: number) {

  }

  greet(to: string) {
    console.log(`Hello ${to}, I am ${this.name}, i am ${this.age}`)
  }

  move (position: Position) {
    this.position = position
    return position
  }
}

const lucas = new Person('Lucas', [32, 43])
lucas.greet('Eze') 

// An alternative to define functions with interfaces
type funtionShort = (a: number, b: number) => number
interface funtionInterface {
  (a: number, b: number): number
}

let add1: funtionShort = (a, b) => a + b
let add2: funtionInterface = (a, b) => a + b