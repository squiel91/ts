type Employee1 = {
  name: string
}

type Priviledges = {
  allowed: string[],
  disallowed: string[]
}

// when there are objects, it merges both
type ElevatedEmployee = Employee1 & Priviledges

const admin: ElevatedEmployee = {
  name: 'Eze',
  allowed: [ 'create-server' ],
  disallowed: []
}

type Combinable = number | string
type Boolish = number | boolean

// when there are combinations it combine them as a set
type Universal = Combinable & Boolish

// Note that that is almost equivalent to using interfaces with extend
interface Employee2 {
  name: string
}

interface Priviledges1 {
  allowed: string[],
  disallowed: string[]
}

interface ElevatedEmployee1 extends Employee1, Priviledges {}