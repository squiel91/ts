/*

CORE TYPES

number: 1, 4, 3.5, -3
string: 'ss', "ss", `ss`
boolean: true, false (no truthy of falsy)

*/

const a = document.getElementById('a')! as HTMLInputElement
const b = document.getElementById('b')! as HTMLInputElement

const calc = document.getElementById('calc')!

function add (a: number, b: number, showResult: boolean): any {
  if (showResult) {
    console.log(a + b)
  } else {
    return a + b
  }
}

let c: number
let d: number = 4
let e = 5

let p
p = 5
p = true
console.log(p)

// OBJECTS
// better to let ts autoinfer the structure
const person: { 
  name: string,
  age: number
} = {
  name: 'Eze',
  age: 30
}

// ARRAYS
let hobbies: string[] = ['football', 'taeckwonbd']
hobbies[0].toUpperCase()

// TUPLE
const tuple: [number, string] = [1, 'hello']

// ENUM
// each enum will be mapped to integers
enum Role {
  ADMIN, // can assign them concrete values ADMIN = 100,
  READ_ONLY,
  AUTHOR
}

let g = Role.ADMIN

// ANY


// UNION
function combine (a: number | string, b: number | string, showResult: boolean): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b)
  }
  return 3
}

// concrete number
// LITERAL TYPE
let resultConversion: 'as-number' | 'as-text'
// resultConversion = 'as_number'


// TYPE ALIAS
type Cominable = number | string
type conversionDescriptor = { a: Cominable, b: Boolean }

// VOID function return
function hello (h: number, t: string): void {

}

// Function
// for example can be used in a handle 
let y: Function
let j: (arg: number) => void

y = hello
// j = hello

function withCallback (h: number, cb: (a: number) => void): number { // the cakkback void is ignored
  cb(h)
  return h
}

withCallback(4, (a) => a)

// UNKNWOWN
let userInput: unknown
let userName: string
userInput = 5
userInput = 'dsds'

// userName = userInput

if (typeof userInput === 'string') {
  userName = userInput
}

// NEVER
function generateError (): never {
  throw { message: 'Error', errorCode: 500 }
  // or while(true) {}
}

calc.addEventListener('click', () => {
  console.log(add(1, 2, true))
  console.log(add(+'1', +'2', false))
})

console.log(add(1, 2, true))
