//help you to get aditional class information that does something in a way that doesnt really care about the type, but saves the type to help

const a: Array<string> = [] 
const b: String[] = []

a.concat('look, its safe!')

const p: Promise<string> = new Promise((accept, reject) => {
    setTimeout(() => {
        accept('Returned!')
    })
})

p.then(isAString => {
    isAString.concat('look, its safe!')
})

// building generic functions

export default 0