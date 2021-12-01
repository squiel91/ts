// Allows to work safelly when there is ambiguity

// the simplest is the  typeof
type Cominable = number | string

function combine (a: Combinable, b: Combinable): Cominable {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    }
    throw new Error('arguments of different types')
}

// Now, for interfaces...

interface A {
    a(): void
}

interface B {
    b(): void
    bb(): void
}

type AB = A | B

const b: AB = {
    a() {}
}

function foo (x: AB) {
    // x.a() error
    // x.b() error
    if ('a' in x) {
        x.a() // success
    }
    if ('b' in x) {
        x.b() // success
        x.bb() // success
    }
}

// for classes, is better to use instances
class C {
    x () {}
    c () {}
}

class D {
    x () {}
    d () {}
}

type CD = C | D

function fooo(x: CD) {
    x.x() // goo
    // d.d() // fails
    // d.c() // fails
    if (x instanceof D) {
        x.d()
    }
}

// DISCRIMINATING UNION
// its called like this because we have one common property which differenciate each object which make up the union
// so we can use that object to discriminate the object for 100% type safety

interface Bird {
    kind: 'bird'
    flyingSpeed: number
}

interface Cheeta {
    kind: 'cheeta'
    runningSpeed: number
}

function tellSpeed (animal: Bird | Cheeta) {
    let speed: number
    if (animal.kind === 'bird') { // if I misstype the kind I will get an error
        speed = animal.flyingSpeed
    } else {
        speed = animal.runningSpeed
    }
    console.log(`My speed is ${speed}`)
}


export default 0