// gives more flexibility when defining interfaces/object

// prety clear regarding the property type, but not which or how many

interface ErrorContainer { // { email: 'Not valid email', username: 'squiel91' }
    id: string,
    // idNum: number, // error, has to be the same as the indexProp
    [prop: string]: string
}