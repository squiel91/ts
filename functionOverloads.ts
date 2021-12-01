type Cominable = number | string

function combine (a: number, b: number): number
function combine (a: string, b: string): string
function combine (a: Combinable, b: Combinable): Combinable {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    }
    throw new Error('arguments of different types')
}

const c = combine(1,1) // is a number
const d = combine('a','b') // is a string
d.split(' ')

// I can add optional parameters, like such
function combineOptional (a: number): number
function combineOptional (a: number, b: number): number
function combineOptional (a: string): string
function combineOptional (a: string, b: string): string
function combineOptional (a: Combinable, b?: Combinable): Combinable { // if I dont add the ? (optional param), I get an error
    if (!b) return a
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    }
    throw new Error('arguments of different types')
}

export default 0
