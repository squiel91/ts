// As a function

function Logger(constructor: Function) { // conventionally startw with uppercase // get the contructor function (which is the sintactic sugar of the class)
    console.log('Logging ...')
    console.log(constructor)
}

@Logger // important: executes when the class is defined, not instanciated
class Person {
    name = 'Eze'

    constructor () {
        console.log('Creating object ...')
    }
}

new Person()

// As a Factory
function LoggerFactory(logString: string) {
    return function LoggerFactory(constructor: Function) { // conventionally startw with uppercase // get the contructor function (which is the sintactic sugar of the class)
        console.log('Logging ... ')
        console.log(logString + constructor)
    }
}

@LoggerFactory('Logging PERSON') // important: executes when the class is defined, not instanciated
class Person1 {
    name = 'Eze'

    constructor () {
        console.log('Creating object ...')
    }
}

// new Person()

export default 0