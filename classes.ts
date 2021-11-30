type Employee = { name: string }
class Department {
    // private name: string // this is pure typescript
    protected employees: Employee[]
    private lastReport: string

    constructor(readonly id: number, private n: string) { // readonly: initialize just once
        this.employees = []
    }

    addEmployee(employee: Employee) { // private is a typescript thing, new in new javascript versions
        this.employees.push(employee)
    }

    get mostRecentReport() {
        return 'REPORT' + this.lastReport
    }

    set mostRecentReport(value: string) {
        if (!value) throw { message: 'Cannot be empty', errorCode: 400 }
        this.lastReport = 'REPORT' + value
    }
}

class ITDepartment  extends Department {
    constructor() {
        super(1, 'IT')
    }
}

const accountant = new Department(2, 'accounting')

accountant.addEmployee({ name: 'Eze' })